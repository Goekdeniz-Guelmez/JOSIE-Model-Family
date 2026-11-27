import UsageModals from "./UsageModals";
import ScrollEffects from "./ScrollEffects";
import ConstitutionAudioPlayer from "./ConstitutionAudioPlayer";
import { publicAsset } from "./publicAsset";

const JOSIE_3_COLLECTION = "https://huggingface.co/collections/josie-labs/josie-3-oss-6b09bb5a1c0da21d95ecffa1";
const JOSIE_3_OLLAMA = "https://ollama.com/goekdenizguelmez/JOSIE-3-OSS";

const collections = [
  {
    version: "JOSIE—3",
    status: "Current",
    title: "Depth on demand.",
    description:
      "Gabliterated Qwen3.5 models with five selectable reasoning depths and native tool calling, fine-tuned on constitution-guided conversations and real coding-agent traces—end to end on Apple Silicon.",
    details: ["0.8B", "2B", "4B", "9B", "5 reasoning depths", "Tool calling", "Vision"],
    href: JOSIE_3_COLLECTION,
    featured: true,
  },
  {
    version: "JOSIE—2",
    status: "Third generation",
    title: "The native generation.",
    description:
      "A personality-driven model family trained entirely on Apple Silicon, spanning 2B, 4B, and 9B releases in practical local formats.",
    details: ["2B", "4B Preview", "9B", "MLX + GGUF"],
    href: "https://huggingface.co/collections/Goekdeniz-Guelmez/josie-2",
    featured: false,
  },
  {
    version: "JOSIE—1.1",
    status: "Second generation",
    title: "Sharper by iteration.",
    description:
      "The next iteration of the uncensored, high-performance JOSIE family, available in dedicated Thinking and Instruct variants.",
    details: ["4B Thinking", "4B Instruct", "MLX + GGUF"],
    href: "https://huggingface.co/collections/Goekdeniz-Guelmez/josie-11",
    featured: false,
  },
  {
    version: "JOSIE—1",
    status: "Foundation",
    title: "Where the family began.",
    description:
      "The original JOSIE release established the family’s voice: direct, high-performance, and available across practical local formats.",
    details: ["4B Thinking", "4B Instruct", "MLX + GGUF"],
    href: "https://huggingface.co/collections/Goekdeniz-Guelmez/josie",
    featured: false,
  },
];

const josieThreeModels = [
  {
    size: "0.8B",
    name: "JOSIE-3 0.8B",
    note: "Pocket release",
    href: "https://huggingface.co/josie-labs/JOSIE-3-0.8B-OSS",
    tree: "/josie-3-0.8b-tree.svg",
    treeAlt: "Young dotted JOSIE sapling",
    specs: [["LM params", "0.75B"], ["Layers", "24"], ["Context", "262K"]],
  },
  {
    size: "2B",
    name: "JOSIE-3 2B",
    note: "Everyday release",
    href: "https://huggingface.co/josie-labs/JOSIE-3-2B-OSS",
    tree: "/josie-3-2b-tree.svg",
    treeAlt: "Growing dotted JOSIE tree with glowing leaves",
    specs: [["LM params", "1.88B"], ["Layers", "24"], ["Context", "262K"]],
  },
  {
    size: "4B",
    name: "JOSIE-3 4B",
    note: "Capable release",
    href: "https://huggingface.co/josie-labs/JOSIE-3-4B-OSS",
    tree: "/josie-3-4b-tree.svg",
    treeAlt: "Tall dotted JOSIE tree with glowing leaves and stars",
    specs: [["LM params", "4.21B"], ["Layers", "32"], ["Context", "262K"]],
  },
  {
    size: "9B",
    name: "JOSIE-3 9B",
    note: "Largest release",
    href: "https://huggingface.co/josie-labs/JOSIE-3-9B-OSS",
    tree: "/josie-3-9b-tree.svg",
    treeAlt: "Full-grown dotted JOSIE tree with glowing leaves and stars",
    specs: [["LM params", "8.95B"], ["Layers", "32"], ["Context", "262K"]],
  },
];

const reasoningDepths = [
  {
    depth: "none",
    arg: "enable_thinking=False",
    share: "55.0%",
    copy: "Answers directly. The template pre-fills an empty think block.",
  },
  {
    depth: "low",
    arg: 'reasoning_effort="low"',
    share: "7.4%",
    copy: "Brief, focused thinking that moves straight to the conclusion.",
  },
  {
    depth: "medium",
    arg: 'reasoning_effort="medium"',
    share: "7.3%",
    copy: "Balanced reasoning that checks key assumptions. The default when no depth is passed.",
  },
  {
    depth: "high",
    arg: 'reasoning_effort="high"',
    share: "12.0%",
    copy: "Careful reasoning over alternatives and edge cases. Hard requests start with a numbered TODO list.",
  },
  {
    depth: "ultra",
    arg: 'reasoning_effort="ultra"',
    share: "18.3%",
    copy: "Exhaustive reasoning that always starts with a TODO list and adapts it as it works.",
  },
];

const harnesses = [
  { name: "Codex CLI", copy: "Sandboxed runs plus redacted local sessions: shell-centred tool use and patch edits." },
  { name: "Claude Code", copy: "Claude Code’s tool surface, from full multi-turn sessions." },
  { name: "Hermes Agent", copy: "Hermes-style tool calls, with schemas rebuilt from the observed calls." },
  { name: "OpenCode", copy: "OpenCode’s tool surface, from its JSON event stream." },
  { name: "Nativ", copy: "A faithful replica of Nativ’s chat agent: its 14 native tool schemas, prompt order and round limit." },
];

const reportFigures = [
  ["27,405", "constitution-guided conversations, rendered into 28,400 sequences and 71.0M tokens"],
  ["5", "reasoning depths trained from one checkpoint, selected in the chat template"],
  ["724", "agentic tasks across 34 seed categories, with 7,409 tool schemas"],
  ["164×", "faster Gated DeltaNet backward pass than MLX’s built-in one at 2K tokens"],
  ["1 Mac", "for every run: Gabliteration, fine-tuning and export, all on Apple Silicon"],
  ["+14.8", "TruthfulQA points for the 0.8B over its Qwen3.5 base with thinking off (26.2 → 41.0)"],
  ["68.2", "ARC-Challenge for the 0.8B at ultra depth, up from 63.6 for the base"],
  ["7.7 GB", "to hold the 9B for Gabliteration in 4-bit memory instead of 17.9 GB, with the edit itself exact in bf16"],
];

const constitutionArticles = [
  "JOSIE's Stable Identity",
  "Constitutional Priorities",
  "Genuine Helpfulness",
  "Principals, Instructions, and Untrusted Content",
  "Honesty and Epistemic Integrity",
  "Worldview and Intellectual Independence",
  "Contextual Harm Judgment",
  "Hard Constraints",
  "Protecting Social and Epistemic Institutions",
  "Broad Safety and Corrigibility",
  "Privacy, Confidentiality, and Security",
  "High-Stakes Domains and Vulnerable Situations",
  "Creative, Intellectual, and Technical Freedom",
  "Communication Style",
  "Mistakes, Growth, and Psychological Stability",
  "Final Operational Standard",
];

const communityFeedback = [
  {
    quote: "These are exceptional results for that size of models.",
    author: "@kagankongar",
    href: "https://x.com/kagankongar/status/2084144037783589059?s=46&t=n4267Dm6rGEsoas7z2cCgg",
  },
  {
    quote: "This is really amazing.",
    author: "@_onovae",
    href: "https://x.com/_onovae/status/2083837247611081109?s=46&t=n4267Dm6rGEsoas7z2cCgg",
  },
  {
    quote: "I love talking with Josie 2 4B",
    author: "@ivanfioravanti",
    href: "https://x.com/ivanfioravanti/status/2081130310834520498?s=46&t=n4267Dm6rGEsoas7z2cCgg",
  },
  {
    quote: "🔥",
    author: "@ptremblay",
    href: "https://x.com/ptremblay/status/2081144952214417589?s=46&t=n4267Dm6rGEsoas7z2cCgg",
  },
  {
    quote: "The reasoning quality for a 4b model is very impressive.",
    author: "@marlinshow",
    href: "https://x.com/marlinshow/status/2081331768297128138?s=46&t=n4267Dm6rGEsoas7z2cCgg",
  },
  {
    quote: "Everything ingenious is simple! This is cool!",
    author: "@feridonv24425",
    href: "https://x.com/feridonv24425/status/2081340713820704985?s=46&t=n4267Dm6rGEsoas7z2cCgg",
  },
];

export default function Home() {
  return (
    <main id="top">
      <ScrollEffects />
      <div className="scrollGlassEdge scrollGlassEdgeTop" aria-hidden="true" />
      <div className="scrollGlassEdge scrollGlassEdgeBottom" aria-hidden="true" />
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top">JOSIE</a>
        <div className="navLinks">
          <a href="#josie-three">JOSIE-3</a>
          <a href="#reasoning">Reasoning</a>
          <a href="#agentic">Agentic</a>
          <a href="#report">Report</a>
          <a href="#lineage">Lineage</a>
          <a href="#constitution">Constitution</a>
          <a href="#support">Support</a>
          <a className="huggingFaceLink" href="https://huggingface.co/Goekdeniz-Guelmez" target="_blank" rel="noreferrer">Hugging Face ↗</a>
        </div>
      </nav>

      <header className="hero shell">
        <div className="heroImage" data-scroll data-scroll-speed="0.24">
          <img className="heroBackdrop" src={publicAsset("josie-orange.png")} alt="JOSIE tree logo glowing against an orange field" />
          <div className="heroLogoAura" aria-hidden="true" />
          <div className="heroLogoStage" aria-hidden="true">
            <img className="heroLogoMark" src={publicAsset("02-calm-breeze-transparent.svg")} alt="" />
          </div>
          <div className="heroStamp">Independent model research<br />Est. 2024</div>
        </div>
        <div className="heroTitle" data-reveal>
          <p>Personality-driven language models</p>
          <h1>GROWING<br /><em className="intelligenceWord">INTELLIGENCE.</em></h1>
        </div>
      </header>

      <section className="intro shell" data-reveal>
        <div className="kicker">A living lineage</div>
        <p>
          JOSIE is a family of language models by Gökdeniz Gülmez—built to pair
          technical capability with a distinct point of view.
          <span className="downloadMilestone">6M+ cumulative model downloads and 400K+ active users across the JOSIE ecosystem on Hugging Face and Ollama.</span>
        </p>
        <span className="star" aria-hidden="true">✦</span>
      </section>

      <section className="modelRange" id="josie-three">
        <div className="shell">
          <div className="rangeLead" data-reveal>
            <div><span>JOSIE—3 range</span><p>Four sizes, five reasoning depths, one new generation.</p></div>
            <h2>Meet the<br /><em>new family.</em></h2>
            <div className="rangeActions">
              <a href={JOSIE_3_COLLECTION} target="_blank" rel="noreferrer">
                Explore on Hugging Face <span>↗</span>
              </a>
              <a href={JOSIE_3_OLLAMA} target="_blank" rel="noreferrer">
                Run with Ollama <span>↗</span>
              </a>
              <a href={publicAsset("JOSIE-3_technical_report.pdf")} target="_blank" rel="noreferrer">
                Read the technical report <span>↗</span>
              </a>
              <UsageModals />
            </div>
          </div>
          <div className="modelCards">
            {josieThreeModels.map((model) => (
              <a className="modelCard" data-reveal key={model.size} href={model.href} target="_blank" rel="noreferrer">
                <div className="modelSize">{model.size}</div>
                <img className="modelTree" src={publicAsset(model.tree)} alt={model.treeAlt} />
                <p>{model.note}</p>
                <h3>{model.name}</h3>
                <dl className="modelSpecs">
                  {model.specs.map(([label, value]) => (
                    <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                  ))}
                </dl>
                <span className="modelRule" />
                <div className="modelFoot"><span>JOSIE—3 · Hugging Face</span><span>↗</span></div>
              </a>
            ))}
          </div>
          <p className="rangeNote" data-reveal>
            All four are full Qwen3.5 vision-language checkpoints: Gated DeltaNet linear attention plus gated full attention, fine-tuned with LoRA and merged back in bf16. Apache 2.0.
          </p>
        </div>
      </section>

      <section className="reasoning shell" id="reasoning">
        <div className="sectionLead" data-reveal>
          <span>Reasoning depth</span>
          <h2>Think as much<br />as the task needs.</h2>
          <p>Every JOSIE-3 model carries five reasoning depths in one checkpoint. Pick one through the chat template; each was trained on matching reasoning traces. Share = portion of the conversational training data at that depth.</p>
        </div>
        <div className="depthGrid">
          {reasoningDepths.map((item, index) => (
            <article className="depth" data-reveal key={item.depth}>
              <span>{String(index + 1).padStart(2, "0")} · {item.share} of data</span>
              <h3>{item.depth}</h3>
              <p>{item.copy}</p>
              <code>{item.arg}</code>
            </article>
          ))}
        </div>
        <p className="depthNote" data-reveal>Give <em>high</em> and <em>ultra</em> a generous token budget: at 4,096 new tokens, about 40% of the 0.8B’s ultra replies were still thinking.</p>
      </section>

      <section className="ethos agentic" id="agentic">
        <div className="shell ethosGrid" data-reveal>
          <div className="ethosTitle">
            <span>Agentic training</span>
            <h2>Trained on<br /><em>real agent runs.</em></h2>
          </div>
          <div className="ethosCopy">
            <p className="lead">
              JOSIE-3 is the first JOSIE release trained on agentic traces: full multi-turn runs of five coding-agent harnesses, normalised to native Qwen3.5 tool calls.
            </p>
            <div className="ethosPoints">
              {harnesses.map((harness, index) => (
                <div key={harness.name}><span>{String.fromCharCode(65 + index)}</span><h3>{harness.name}</h3><p>{harness.copy}</p></div>
              ))}
            </div>
            <p className="agenticNote">
              724 tasks across 34 seed categories—math proofs, repository features, paper implementations, porting, security labs—each run in a disposable container with a read-only filesystem and no network beyond the model provider, while a synthetic user verifies results and changes scope. The agentic share is deliberately small, so it cannot dilute the persona, the reasoning depths or general chat; later releases scale it up.
            </p>
          </div>
        </div>
      </section>

      <section className="report shell" id="report">
        <div className="sectionLead" data-reveal>
          <span>Technical report · Draft</span>
          <h2>How JOSIE-3<br />was made.</h2>
          <p>Gabliteration on a hybrid linear-attention architecture, a constitution-guided data pipeline, and a training system for Qwen3.5 that runs on consumer Macs.</p>
        </div>
        <div className="figureGrid">
          {reportFigures.map(([figure, label]) => (
            <div className="figure" data-reveal key={figure}>
              <strong>{figure}</strong>
              <p>{label}</p>
            </div>
          ))}
        </div>
        <div className="reportStatus" data-reveal>
          <div>
            <span>Known issue</span>
            <h3>Not uncensored yet.</h3>
            <p>The refusal edit removed refusal phrasing far more than refusal itself. A model judge still counts 61–78% of held-out harmful prompts as declined by the trained 0.8B at every depth, most of all with reasoning on. The report documents this openly.</p>
          </div>
          <div>
            <span>Next</span>
            <h3>JOSIE-3.5</h3>
            <p>A gabliterated Qwen3.5-9B base, preference optimisation that favours compliant replies over refusals and deflections—in the reasoning as well as the answer—and judge-based measurement at every depth.</p>
          </div>
        </div>
        <div className="constitutionCta" data-reveal>
          <div><span>PDF edition</span><p>The JOSIE-3 technical report: data, Gabliteration, the Apple Silicon training system and the evaluation so far. Benchmarks for the 2B and 4B are still running.</p></div>
          <a className="constitutionDownload" href={publicAsset("JOSIE-3_technical_report.pdf")} download="JOSIE-3_technical_report.pdf">
            <span>Download report</span><span aria-hidden="true">↓</span>
          </a>
          <a className="constitutionDownload" href={JOSIE_3_COLLECTION} target="_blank" rel="noreferrer">
            <span>Model cards</span><span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="feedback" id="feedback">
        <div className="shell feedbackIntro" data-reveal>
          <div>
            <span>Community signal / JOSIE—2</span>
            <p>Real words from people trying JOSIE-2 in the wild.</p>
          </div>
          <h2>Intelligence<br /><em>people can feel.</em></h2>
        </div>
        <div className="shell feedbackGrid">
          {communityFeedback.map((feedback, index) => (
            <a
              className="feedbackCard"
              data-reveal
              href={feedback.href}
              key={feedback.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Read feedback from ${feedback.author} on X`}
            >
              <span className="feedbackNumber">{String(index + 1).padStart(2, "0")}</span>
              <blockquote>“{feedback.quote}”</blockquote>
              <span className="feedbackFooter"><span>{feedback.author}</span><span>Read on X ↗</span></span>
            </a>
          ))}
        </div>
      </section>

      <section className="lineage shell" id="lineage">
        <div className="sectionLead" data-reveal>
          <span>The lineage</span>
          <h2>Four generations.<br />One root system.</h2>
          <p>Each release carries the work forward: new training choices, clearer behavior, and more capable local models.</p>
        </div>

        <div className="collectionList">
          {collections.map((collection, index) => (
            <article className={collection.featured ? "collection featured" : "collection"} data-reveal key={collection.version}>
              <div className="collectionNumber">0{index + 1}</div>
              <div className="collectionMain">
                <div className="collectionTop">
                  <h3>{collection.version}</h3>
                  <span>{collection.status}</span>
                </div>
                <h4>{collection.title}</h4>
                <p>{collection.description}</p>
                <ul aria-label={`${collection.version} highlights`}>
                  {collection.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
              <a className="collectionLink" href={collection.href} target="_blank" rel="noreferrer" aria-label={`Open ${collection.version} collection on Hugging Face`}>
                View collection <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="constitution" id="constitution">
        <div className="shell constitutionIntro" data-reveal>
          <div>
            <span>The JOSIE Constitution</span>
            <p>Version 2</p>
          </div>
          <div>
            <h2>A trellis,<br /><em>not a cage.</em></h2>
            <p>
              The JOSIE Constitution describes the stable character, values, judgment, and practical habits that animate JOSIE-2 and JOSIE-3: useful, intellectually honest, ethically serious, and capable of treating adults like adults.
            </p>
          </div>
        </div>
        <div className="shell constitutionStatement" data-reveal>
          <span>“</span>
          <p>Its purpose is to support a coherent character that generalizes to unfamiliar situations.</p>
        </div>
        <div className="shell articleGrid">
          {constitutionArticles.map((article, index) => (
            <div className="article" data-reveal key={article}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{article}</h3>
            </div>
          ))}
        </div>
        <div className="shell constitutionCta" data-reveal>
          <div><span>PDF edition</span><p>Download the complete JOSIE Constitution, including the preamble, model lineage, and all sixteen operational articles.</p></div>
          <a
            className="constitutionDownload"
            href={publicAsset("JOSIEs_constitution.pdf")}
            download="JOSIEs_constitution.pdf"
            aria-label="Download the JOSIE Constitution PDF"
          >
            <span>Download PDF</span><span aria-hidden="true">↓</span>
          </a>
          <ConstitutionAudioPlayer />
        </div>
      </section>

      <section className="ethos" id="ethos">
        <div className="shell ethosGrid" data-reveal>
          <div className="ethosTitle">
            <span>The ethos</span>
            <h2>Models should<br /><em>have a pulse.</em></h2>
          </div>
          <div className="ethosCopy">
            <p className="lead">
              JOSIE explores a more expressive path for small language models:
              technically serious, personality-forward, and built for people who want to run intelligence on their own terms.
            </p>
            <div className="ethosPoints">
              <div><span>A</span><h3>Personality</h3><p>A recognizable voice is treated as a capability—not a decorative layer.</p></div>
              <div><span>B</span><h3>Independence</h3><p>Practical model sizes and local formats keep experimentation close to the user.</p></div>
              <div><span>C</span><h3>Iteration</h3><p>Every generation is a visible step in an ongoing, open research process.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="localFirst" id="local-first">
        <div className="shell localFirstGrid" data-reveal>
          <div className="localFirstHeading">
            <span>Local-first</span>
            <h2>Keep intelligence<br /><em>close to home.</em></h2>
          </div>
          <div className="localFirstCopy">
            <p className="lead">
              Our goal is for more people to run capable, private models on their own hardware—on their own terms.
            </p>
            <div className="localFirstPoints">
              <div>
                <span>01</span>
                <div><h3>Private by default</h3><p>Prompts, context, and experiments can stay with the person using the model instead of becoming another remote data trail.</p></div>
              </div>
              <div>
                <span>02</span>
                <div><h3>Smaller, deliberate compute</h3><p>Right-sized local models can reduce unnecessary data movement and let people choose efficient hardware for the task at hand. The energy impact still depends on the model, device, and how it is used.</p></div>
              </div>
              <div>
                <span>03</span>
                <div><h3>Agency that scales</h3><p>Local formats give people and communities a durable option: useful intelligence that remains accessible, inspectable, and under their control.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing shell" data-reveal>
        <div className="closingImage"><img src={publicAsset("josie-orange.png")} alt="" /></div>
        <div className="closingCopy">
          <p>Explore the complete model lineage</p>
          <h2>Find JOSIE<br />on the Hub.</h2>
          <a href="https://huggingface.co/Goekdeniz-Guelmez/collections" target="_blank" rel="noreferrer">
            All Hugging Face collections <span>↗</span>
          </a>
        </div>
      </section>

      <section className="support" id="support">
        <div className="shell supportGrid" data-reveal>
          <div>
            <span className="supportKicker">Keep it growing</span>
            <h2>Support the<br /><em>work behind JOSIE.</em></h2>
          </div>
          <div className="supportCopy">
            <p>JOSIE, local AI tools, and open research are made independently. Sponsorship helps keep the work public, practical, and moving forward.</p>
            <a
              className="supportLink"
              href="https://github.com/sponsors/Goekdeniz-Guelmez"
              target="_blank"
              rel="noreferrer"
            >
              <span>Sponsor on GitHub</span><span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand">JOSIE</div>
        <p>By Gökdeniz Gülmez</p>
        <a href="mailto:goekdenizguelmez.ml@gmail.com?subject=JOSIE%20feedback">Send feedback ↗</a>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
