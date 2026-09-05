const FOCUS = [
  {
    k: "Evidence Architecture",
    note: "让来源、事实、分析和报告可以相互追溯，形成可验证的证据链。",
  },
  {
    k: "Harness",
    note: "进一步明确 Agent 的 Goal、Input、Output、Tools、State、Stop Condition、Error Return。",
  },
  {
    k: "RAG Architecture",
    note: "优化 Query Classification、Routing、Retrieval Strategy、Recall、Context、Reranking、Validation、Fallback。",
  },
  {
    k: "Evaluation",
    note: "完善持续回归评测体系，让每一次改动都有可对比的证据。",
  },
  {
    k: "Observability & Reliability",
    note: "完善 Trace、Cost、Latency、Audit、Error、Fallback。",
  },
];

/**
 * Current Focus（§23）：大文字关键词 + 一句说明。
 */
export function CurrentFocus() {
  return (
    <div className="mt-8">
      {FOCUS.map((f) => (
        <div key={f.k} className="border-t border-line py-6">
          <p className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
            {f.k}
          </p>
          <p className="mt-2 max-w-[640px] text-sm leading-relaxed text-muted">
            {f.note}
          </p>
        </div>
      ))}
    </div>
  );
}
