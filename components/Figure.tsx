import { cn } from "@/lib/utils";

/**
 * 图片槽位（§14 / §18 / §35）：有真实截图时渲染 <img>，
 * 否则渲染低视觉权重的 Placeholder，明确文件名，等待真实素材替换。
 */
export function Figure({
  id,
  caption,
  placeholder,
  src,
  aspect = "aspect-video",
}: {
  id: string;
  caption: string;
  placeholder: string;
  src?: string;
  aspect?: string;
}) {
  return (
    <figure className="mt-12 w-full">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={caption}
          className="w-full rounded-[6px] border border-line"
        />
      ) : (
        <div
          className={cn(
            "flex w-full items-center justify-center rounded-[6px] border border-dashed border-line bg-surface",
            aspect,
          )}
        >
          <div className="px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
              Product screenshot to be added
            </p>
            <p className="mt-2 font-mono text-[11px] text-muted">
              /public/images/credit-report/{placeholder}.png
            </p>
          </div>
        </div>
      )}
      <figcaption className="mt-3 flex items-baseline gap-3 text-[12px] text-muted">
        <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.15em]">
          {id}
        </span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
