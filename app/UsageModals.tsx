"use client";

import { useRef, useState } from "react";

const models = [
  "Goekdeniz-Guelmez/JOSIE-2-4B-Preview",
  "Goekdeniz-Guelmez/JOSIE-2-2B-OSS",
  "Goekdeniz-Guelmez/JOSIE-2-4B-OSS",
  "Goekdeniz-Guelmez/JOSIE-2-9B-OSS",
];

const settings = [
  ["max_tokens", "16384"],
  ["temperature", "0.2"],
  ["top_p", "0.95"],
  ["top_k", "20"],
  ["min_p", "0.0"],
  ["repetition_penalty", "1.05"],
  ["presence_penalty", "0.0"],
];

const snippets = {
  transformers: (model: string) => `from transformers import pipeline

model_id = "${model}"

generator = pipeline(
    "text-generation",
    model=model_id,
    device_map="auto",
    torch_dtype="auto",
)

messages = [
    {"role": "user", "content": "Introduce yourself in one sentence."}
]

response = generator(
    messages,
    max_new_tokens=16384,
    do_sample=True,
    temperature=0.2,
    top_p=0.95,
    top_k=20,
    min_p=0.0,
    repetition_penalty=1.05,
)
print(response[0]["generated_text"][-1]["content"])`,
  mlx: (model: string) => `from mlx_lm import load, generate
from mlx_lm.sample_utils import make_logits_processors, make_sampler

model_id = "${model}"
model, tokenizer = load(model_id)

prompt = tokenizer.apply_chat_template(
    [{"role": "user", "content": "Introduce yourself in one sentence."}],
    tokenize=False,
    add_generation_prompt=True,
)

sampler = make_sampler(
    temp=0.2,
    top_p=0.95,
    top_k=20,
    min_p=0.0,
)
logits_processors = make_logits_processors(
    logit_bias=None,
    repetition_penalty=1.05,
    repetition_context_size=20,
)

response = generate(
    model,
    tokenizer,
    prompt=prompt,
    max_tokens=16384,
    sampler=sampler,
    logits_processors=logits_processors,
)
print(response)`,
};

type UsageKind = keyof typeof snippets;

export default function UsageModals() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<UsageKind>("transformers");
  const [model, setModel] = useState(models[0]);
  const [copied, setCopied] = useState(false);
  const currentSnippet = snippets[active](model);

  const open = (kind: UsageKind) => {
    setActive(kind);
    setCopied(false);
    dialogRef.current?.showModal();
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(currentSnippet);
    setCopied(true);
  };

  return (
    <>
      <div className="usageButtons" aria-label="JOSIE-2 usage examples">
        <button type="button" onClick={() => open("transformers")}>
          Use with Transformers <span>↗</span>
        </button>
        <button type="button" onClick={() => open("mlx")}>
          Use with MLX <span>↗</span>
        </button>
      </div>

      <dialog
        className="codeDialog"
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        aria-labelledby="code-dialog-title"
      >
        <div className="codeDialogPanel">
          <div className="codeDialogHead">
            <div className="codeDialogTitle">
              <span>JOSIE—2 / Quick start</span>
              <div className="titleAndModel">
                <h3 id="code-dialog-title">
                  {active === "transformers" ? "Transformers" : "MLX"}
                </h3>
                <label>
                  <span className="srOnly">Model size</span>
                  <select
                    value={model}
                    onChange={(event) => {
                      setModel(event.target.value);
                      setCopied(false);
                    }}
                  >
                    {models.map((modelId) => (
                      <option value={modelId} key={modelId}>
                        {modelId.replace("Goekdeniz-Guelmez/JOSIE-2-", "")}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <button
              className="dialogClose"
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Close code example"
            >
              ×
            </button>
          </div>
          <pre><code>{currentSnippet}</code></pre>
          <div className="inferenceSettings">
            <span>Recommended inference settings</span>
            <dl>
              {settings.map(([parameter, value]) => (
                <div key={parameter}>
                  <dt>{parameter}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <button className="copyCode" type="button" onClick={copyCode}>
            {copied ? "Copied" : "Copy code"} <span>{copied ? "✓" : "□"}</span>
          </button>
        </div>
      </dialog>
    </>
  );
}
