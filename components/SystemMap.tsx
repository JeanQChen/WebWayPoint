import { cn } from "@/lib/utils";

function Node({
  title,
  sub,
  accent,
}: {
  title: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[6px] border px-4 py-2.5 text-center",
        accent ? "border-accent/40 bg-accent-soft" : "border-line bg-background",
      )}
    >
      <p
        className={cn(
          "text-sm font-medium",
          accent ? "text-accent" : "text-foreground",
        )}
      >
        {title}
      </p>
      {sub ? (
        <p className="mt-0.5 font-mono text-[11px] text-muted">{sub}</p>
      ) : null}
    </div>
  );
}

function Arrow() {
  return (
    <span aria-hidden="true" className="font-mono text-sm text-muted">
      ↓
    </span>
  );
}

/**
 * 分层 System Map（§19）：细线 + 白底 + 黑字，Accent 只强调 Evidence 与 Human Review。
 */
export function SystemMap() {
  return (
    <div
      role="img"
      aria-label="当前系统分层结构：Documents / Data → Parsing & Routing → Financial / Credit / Industry / Project Analysis → Evidence → Integration & Verification → Report → Human Review"
    >
      <div className="mt-8 flex flex-col items-center gap-2" aria-hidden="true">
        <Node title="Documents / Data" />
        <Arrow />
        <Node title="Parsing & Routing" />
        <Arrow />
        <div className="grid w-full max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
          <Node title="Financial Analysis" />
          <Node title="Credit Analysis" />
          <Node title="Industry Analysis" />
          <Node title="Project Analysis" />
        </div>
        <Arrow />
        <Node title="Evidence" accent />
        <Arrow />
        <Node title="Integration & Verification" />
        <Arrow />
        <Node title="Report" />
        <Arrow />
        <Node title="Human Review" accent />
      </div>
    </div>
  );
}
