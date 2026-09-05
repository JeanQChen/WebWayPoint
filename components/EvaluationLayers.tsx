function Tier({
  en,
  zh,
  sub,
}: {
  en: string;
  zh: string;
  sub: string;
}) {
  return (
    <div className="rounded-[6px] border border-line bg-background px-5 py-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        {en}
      </p>
      <p className="mt-1 text-base font-medium text-foreground">{zh}</p>
      <p className="mt-1 text-sm text-muted">{sub}</p>
    </div>
  );
}

const METRICS = [
  "Accuracy",
  "Completeness",
  "Groundedness",
  "Consistency",
  "Citation Quality",
  "Tool Success",
  "Latency",
  "Cost",
];

/**
 * Evaluation 分层（§21）：先让人理解 Evaluation 是分层的，再读指标。
 */
export function EvaluationLayers() {
  return (
    <div className="mt-8 max-w-[640px]">
      <div className="flex flex-col gap-2">
        <Tier en="SYSTEM" zh="完整授信报告" sub="整个输出是否可信、可交付" />
        <div className="text-center font-mono text-sm text-muted" aria-hidden="true">
          ↑
        </div>
        <Tier
          en="CAPABILITY"
          zh="财务 / 信用 / 行业 / 项目"
          sub="每个专业能力是否可靠"
        />
        <div className="text-center font-mono text-sm text-muted" aria-hidden="true">
          ↑
        </div>
        <Tier
          en="COMPONENT"
          zh="RAG / OCR / Calculation / Parsing"
          sub="最小单元是否被单独评测"
        />
      </div>

      <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        METRICS
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {METRICS.join(" · ")}
      </p>
    </div>
  );
}
