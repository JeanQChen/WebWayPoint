import { cn } from "@/lib/utils";

/**
 * 状态文字：纯文本 + 大写 mono，不再使用圆点 / 边框徽标（Redesign §28）。
 */
export function StatusBadge({
  label,
  tone = "accent",
  className,
}: {
  label: string;
  tone?: "accent" | "muted";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.15em]",
        tone === "accent" ? "text-accent" : "text-muted",
        className,
      )}
    >
      {label}
    </span>
  );
}
