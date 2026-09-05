const DECISIONS = [
  {
    n: "01",
    title: "Workflow vs Agent",
    body: "确定性任务优先 Workflow；需要开放搜索和判断时，才引入有边界的 Agent。",
  },
  {
    n: "02",
    title: "LLM vs Code",
    body: "Code calculates. LLM interprets.",
  },
  {
    n: "03",
    title: "Generate vs Verify",
    body: "生成与验证是两个不同的能力，而不是让一个模型一边生成一边自证。",
  },
  {
    n: "04",
    title: "Modular vs Monolithic",
    body: "Small capability. Clear contract. Independent evaluation.",
  },
];

/**
 * Key Design Decisions（§20）：四个 Editorial Block，Top Border + 编号 + 原则 + 简短解释。
 */
export function DesignDecisions() {
  return (
    <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
      {DECISIONS.map((d) => (
        <div key={d.n} className="border-t border-line pt-5">
          <p className="font-mono text-xs text-muted">{d.n}</p>
          <h3 className="mt-2 text-lg font-medium tracking-tight text-foreground sm:text-xl">
            {d.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
        </div>
      ))}
    </div>
  );
}
