import { cn } from "@/lib/utils";

const COLUMNS = [
  {
    en: "CONTEXT",
    zh: "授信研究需要处理企业、财务、行业、项目信息，以及大量外部资料。",
  },
  {
    en: "GOAL",
    zh: "探索 AI 如何辅助资料处理、分析、校验和报告生成。",
  },
  {
    en: "BOUNDARY",
    zh: "AI 辅助判断，不替代最终授信决策。",
  },
];

/**
 * What is this? 的三栏 Overview（§15）：Column + Divider，不用 Card。
 */
export function Overview() {
  return (
    <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-3 sm:gap-0">
      {COLUMNS.map((col, i) => (
        <div
          key={col.en}
          className={cn(
            "sm:px-8",
            i === 0 ? "sm:pl-0" : "sm:border-l sm:border-line",
          )}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            {col.en}
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground">
            {col.zh}
          </p>
        </div>
      ))}
    </div>
  );
}
