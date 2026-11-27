"""Grow per-size JOSIE trees from the animated logo SVG.

A younger tree keeps only the dots that are close to the trunk base along the
tree itself (geodesic distance over the dot graph), so branches grow outward in
the order a real tree would. The result is scaled about the ground point, so
every stage stands on the same ground line, and keeps the logo's animations.
"""

import heapq
import math
import re
from pathlib import Path

PUBLIC = Path(__file__).resolve().parent.parent / "public"
SOURCE = PUBLIC / "02-calm-breeze-transparent.svg"

# name: (share of the full tree's geodesic reach, scale, roots share, extra stars)
STAGES = {
    "josie-3-0.8b-tree.svg": (0.46, 0.56, 0.36, 1),
    "josie-3-2b-tree.svg": (0.64, 0.72, 0.56, 4),
    "josie-3-4b-tree.svg": (0.82, 0.86, 0.78, 9),
    "josie-3-9b-tree.svg": (1.00, 1.00, 1.00, 18),
}
NEIGHBOUR_PX = 18.0
GROUND = (614.0, 840.0)
# Shared crop around the full tree, so every stage keeps the same scale and ground line.
VIEWBOX = "190 130 870 860"

DOT = re.compile(r"<g data-dot=.*?</ellipse></g>", re.S)
DOT_POS = re.compile(r'data-wind-kind="(\w+)">.*?<ellipse cx="([\d.]+)" cy="([\d.]+)" rx="([\d.]+)" ry="([\d.]+)"', re.S)
LEAF_POS = re.compile(r'<g transform="translate\(([\d.]+) ([\d.]+)\)">')


def geodesic(points, source):
    n = len(points)
    dist = [math.inf] * n
    dist[source] = 0.0
    heap = [(0.0, source)]
    while heap:
        d, i = heapq.heappop(heap)
        if d > dist[i]:
            continue
        xi, yi = points[i]
        for j, (xj, yj) in enumerate(points):
            step = math.hypot(xi - xj, yi - yj)
            if step <= NEIGHBOUR_PX and d + step < dist[j]:
                dist[j] = d + step
                heapq.heappush(heap, (dist[j], j))
    return dist


def main():
    svg = SOURCE.read_text()
    tree_at, leaves_at, stars_at = svg.index('<g id="tree"'), svg.index('<g id="leaves">'), svg.index('<g id="stars"')
    head = re.sub(
        r'width="1254" height="1254" viewBox="0 0 1254 1254"',
        f'width="{VIEWBOX.split()[2]}" height="{VIEWBOX.split()[3]}" viewBox="{VIEWBOX}"',
        svg[:tree_at],
        count=1,
    )
    tree_open = svg[tree_at:svg.index(">", tree_at) + 1]

    dots = []
    for block in DOT.findall(svg[tree_at:leaves_at]):
        kind, x, y, rx, ry = DOT_POS.search(block).groups()
        dots.append((block, kind, float(x), float(y)))
    wood = [d for d in dots if d[1] != "roots"]
    roots = [d for d in dots if d[1] == "roots"]

    points = [(x, y) for _, _, x, y in wood]
    base = max(range(len(points)), key=lambda i: points[i][1] - abs(points[i][0] - GROUND[0]))
    reach = geodesic(points, base)
    if math.inf in reach:
        raise SystemExit(f"{reach.count(math.inf)} dots are not connected; raise NEIGHBOUR_PX")
    full_reach = max(reach)
    root_span = max(abs(x - GROUND[0]) for _, _, x, _ in roots)

    leaf_blocks = re.split(r"(?=<g data-leaf=)", svg[leaves_at:stars_at])[1:]
    leaf_blocks[-1] = leaf_blocks[-1][: leaf_blocks[-1].rindex("</g>")]
    leaves = []
    for block in leaf_blocks:
        lx, ly = map(float, LEAF_POS.search(block).groups())
        nearest = min(range(len(points)), key=lambda i: math.hypot(points[i][0] - lx, points[i][1] - ly))
        leaves.append((block, reach[nearest] + math.hypot(points[nearest][0] - lx, points[nearest][1] - ly)))

    star_blocks = re.split(r"(?=<g data-additional-star=)", svg[stars_at:])
    star_head, extra_stars = star_blocks[0], star_blocks[1:]
    extra_stars[-1] = extra_stars[-1][: extra_stars[-1].index("</g>\n</g></svg>") + 4]

    for name, (share, scale, root_share, star_count) in STAGES.items():
        limit = share * full_reach
        # Smaller trees get relatively larger dots so they do not fade out when scaled down.
        grow = 1 / math.sqrt(scale)
        resize = lambda block: re.sub(r'r([xy])="([\d.]+)"', lambda m: f'r{m[1]}="{float(m[2]) * grow:.2f}"', block)
        kept = [resize(block) for (block, *_), r in zip(wood, reach) if r <= limit]
        kept += [resize(block) for block, _, x, _ in roots if abs(x - GROUND[0]) <= root_share * root_span]
        kept_leaves = [block for block, r in leaves if r <= limit]
        gx, gy = GROUND
        transform = f"translate({gx} {gy}) scale({scale}) translate({-gx} {-gy})"
        out = (
            head
            + f'<g transform="{transform}">\n'
            + tree_open + "\n" + "\n".join(kept) + "\n</g>\n"
            + '<g id="leaves">\n' + "".join(kept_leaves) + "\n</g>\n"
            + "</g>\n"
            + star_head + "".join(extra_stars[:star_count]) + "\n</g></svg>\n"
        )
        (PUBLIC / name).write_text(out)
        print(f"{name}: {len(kept)} dots, {len(kept_leaves)} leaves, {star_count + 1} stars")


if __name__ == "__main__":
    main()
