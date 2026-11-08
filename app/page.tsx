import UsageModals from "./UsageModals";
import ScrollEffects from "./ScrollEffects";
import ConstitutionAudioPlayer from "./ConstitutionAudioPlayer";
import { publicAsset } from "./publicAsset";

const collections = [
  {
    version: "JOSIE—2",
    status: "Current",
    title: "The native generation.",
    description:
      "A personality-driven model family trained entirely on Apple Silicon, spanning 2B, 4B, and 9B releases in practical local formats.",
    details: ["2B", "4B Preview", "9B", "MLX + GGUF"],
    href: "https://huggingface.co/collections/Goekdeniz-Guelmez/josie-2",
    featured: true,
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

const josieTwoModels = [
  {
    size: "2B",
    name: "JOSIE-2 2B",
    note: "Compact release",
    tree: "/josie-2-2b-tree-transparent.png",
    treeAlt: "Small dotted JOSIE tree with a star",
    copy: "The smallest member of the new JOSIE-2 line—built for a lighter footprint without leaving the family behind.",
  },
  {
    size: "4B",
    name: "JOSIE-2 4B",
    note: "Preview release",
    tree: "/josie-2-4b-tree-transparent.png",
    treeAlt: "Growing dotted JOSIE tree with a star",
    copy: "The first public expression of JOSIE-2: a personality-driven 4B model trained entirely on Apple Silicon.",
  },
  {
    size: "9B",
    name: "JOSIE-2 9B",
    note: "Expanded release",
    tree: "/josie-2-9b-tree-transparent.png",
    treeAlt: "Large dotted JOSIE tree with a star",
    copy: "The larger JOSIE-2 model, extending the family into a higher-capacity configuration.",
  },
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
          <a href="#josie-two">JOSIE-2</a>
          <a href="#lineage">Lineage</a>
          <a href="#constitution">Constitution</a>
          <a href="#ethos">Ethos</a>
          <a href="#feedback">Feedback</a>
          <a href="#local-first">Local-first</a>
          <a href="#support">Support</a>
          <a className="huggingFaceLink" href="https://huggingface.co/Goekdeniz-Guelmez" target="_blank" rel="noreferrer">Hugging Face ↗</a>
        </div>
      </nav>

      <header className="hero shell">
        <div className="heroImage" data-scroll data-scroll-speed="0.24">
          <img src={publicAsset("josie-orange.png")} alt="JOSIE tree logo glowing against an orange field" />
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
          <span className="downloadMilestone">2.14M+ cumulative model downloads across the JOSIE ecosystem on Hugging Face and Ollama.</span>
        </p>
        <span className="star" aria-hidden="true">✦</span>
      </section>

      <section className="modelRange" id="josie-two">
        <div className="shell">
          <div className="rangeLead" data-reveal>
            <div><span>JOSIE—2 range</span><p>Three scales, one new generation.</p></div>
            <h2>Meet the<br /><em>new family.</em></h2>
            <div className="rangeActions">
              <a href="https://huggingface.co/collections/Goekdeniz-Guelmez/josie-2" target="_blank" rel="noreferrer">
                Explore on Hugging Face <span>↗</span>
              </a>
              <a href="https://ollama.com/goekdenizguelmez/JOSIE-2" target="_blank" rel="noreferrer">
                Run with Ollama <span>↗</span>
              </a>
              <UsageModals />
            </div>
          </div>
          <div className="modelCards">
            {josieTwoModels.map((model) => (
              <article className="modelCard" data-reveal key={model.size}>
                <div className="modelSize">{model.size}</div>
            <img className="modelTree" src={publicAsset(model.tree)} alt={model.treeAlt} />
                <p>{model.note}</p>
                <h3>{model.name}</h3>
                <span className="modelRule" />
                <div className="modelFoot"><span>JOSIE—2</span><span>→</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="feedback" id="feedback">
        <div className="shell feedbackIntro" data-reveal>
          <div>
            <span>Community signal / JOSIE—2</span>
            <p>Real words from people trying the new JOSIE generation in the wild.</p>
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
          <h2>Three generations.<br />One root system.</h2>
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
              The JOSIE Constitution describes the stable character, values, judgment, and practical habits that animate JOSIE-2: useful, intellectually honest, ethically serious, and capable of treating adults like adults.
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
