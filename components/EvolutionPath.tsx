import { ChevronDown } from "lucide-react";
import type { EvolutionStage } from "@/lib/types";

const FIELDS = [
  { key: "wanted", label: "当时想解决什么" },
  { key: "broke", label: "出了什么问题" },
  { key: "changed", label: "做了什么改变" },
  { key: "learned", label: "形成了什么认识" },
] as const;

function Field({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
        {label}
      </p>
      <ul className="mt-1.5 space-y-1">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Evolution Path（§17）：默认折叠的纵向路径。快速浏览者只看编号 + 标题 + 一句话总结，
 * 深度阅读者展开后查看当时想解决什么 / 出了什么问题 / 做了什么改变 / 形成了什么认识。
 * 使用原生 <details>，无 JS，键盘可访问。
 */
export function EvolutionPath({ stages }: { stages: EvolutionStage[] }) {
  return (
    <div className="mt-8 border-t border-line">
      {stages.map((stage, index) => {
        const english = stage.label.split(" · ")[1] ?? stage.label;
        return (
          <details key={stage.id} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-start gap-4 py-5 sm:gap-6 [&::-webkit-details-marker]:hidden [&::marker]:hidden">
              <span className="w-6 shrink-0 font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  {english}
                </span>
                <span className="mt-1 block text-base font-medium text-foreground">
                  {stage.title}
                </span>
                {stage.summary ? (
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {stage.summary}
                  </span>
                ) : null}
              </span>
              <ChevronDown
                className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <div className="pb-6 pl-10 sm:pl-12">
              {stage.flow && stage.flow.length > 0 ? (
                <p className="mb-5 font-mono text-xs leading-relaxed text-muted">
                  {stage.flow.join(" → ")}
                </p>
              ) : null}
              <div className="max-w-[640px] space-y-4">
                <Field label={FIELDS[0].label} items={stage.wanted} />
                <Field label={FIELDS[1].label} items={stage.broke} />
                <Field label={FIELDS[2].label} items={stage.changed} />
                <Field label={FIELDS[3].label} items={stage.learned} />
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
