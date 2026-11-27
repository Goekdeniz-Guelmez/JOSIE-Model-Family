"use client";

import { useRef, useState } from "react";

const models = [
  "josie-labs/JOSIE-3-0.8B-OSS",
  "josie-labs/JOSIE-3-2B-OSS",
  "josie-labs/JOSIE-3-4B-OSS",
  "josie-labs/JOSIE-3-9B-OSS",
];

const depths = ["none", "low", "medium", "high", "ultra"] as const;
type Depth = (typeof depths)[number];

const templateArg = (depth: Depth) =>
  depth === "none" ? "enable_thinking=False" : `reasoning_effort="${depth}"`;

const snippets = {
  transformers: (model: string, depth: Depth) => `from transformers import AutoModelForImageTextToText, AutoProcessor

model_id = "${model}"
processor = AutoProcessor.from_pretrained(model_id)
model = AutoModelForImageTextToText.from_pretrained(model_id, dtype="auto", device_map="auto")

messages = [{"role": "user", "content": [{"type": "text", "text": "Introduce yourself in one sentence."}]}]
inputs = processor.apply_chat_template(
    messages,
    add_generation_prompt=True,
    tokenize=True,
    return_dict=True,
    return_tensors="pt",
    ${templateArg(depth)},
).to(model.device)

out = model.generate(**inputs, max_new_tokens=8192)
print(processor.decode(out[0][inputs["input_ids"].shape[1]:]))`,
  mlx: (model: string, depth: Depth) => `# pip install -U mlx-vlm
from mlx_vlm import load, generate
from mlx_vlm.prompt_utils import apply_chat_template

model, processor = load("${model}")
prompt = apply_chat_template(
    processor,
    model.config,
    "Introduce yourself in one sentence.",
    ${templateArg(depth)},
)
print(generate(model, processor, prompt, max_tokens=8192).text)`,
};

type UsageKind = keyof typeof snippets;

export default function UsageModals() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<UsageKind>("transformers");
  const [model, setModel] = useState(models[0]);
  const [depth, setDepth] = useState<Depth>("medium");
  const [copied, setCopied] = useState(false);
  const currentSnippet = snippets[active](model, depth);

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
      <div className="usageButtons" aria-label="JOSIE-3 usage examples">
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
              <span>JOSIE—3 / Quick start</span>
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
                        {modelId.replace("josie-labs/JOSIE-3-", "")}
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
            <span>Reasoning depth</span>
            <div className="depthPicker" role="radiogroup" aria-label="Reasoning depth">
              {depths.map((option) => (
                <button
                  type="button"
                  role="radio"
                  aria-checked={depth === option}
                  key={option}
                  onClick={() => {
                    setDepth(option);
                    setCopied(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button className="copyCode" type="button" onClick={copyCode}>
            {copied ? "Copied" : "Copy code"} <span>{copied ? "✓" : "□"}</span>
          </button>
        </div>
      </dialog>
    </>
  );
}
