import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { getProjects, getResources, getThoughts } from "@/lib/content";

/** 取标题中「：」之前的部分，作为入口处的短标题 */
function shortTitle(text: string): string {
  return text.split(/[:：]/)[0].trim();
}

interface EntranceItem {
  title: string;
  href: string;
  external?: boolean;
}

export default function HomePage() {
  const entrances: Array<{
    index: string;
    label: string;
    title: string;
    description: string;
    items: EntranceItem[];
    more: { href: string; label: string };
  }> = [
    {
      index: "01",
      label: "PRACTICE",
      title: "AI产品实践",
      description: "项目、尝试、失败、重构，以及一个想法如何逐渐成为系统。",
      items: getProjects()
        .slice(0, 2)
        .map((p) => ({ title: p.title, href: `/projects/${p.slug}` })),
      more: { href: "/projects", label: "查看全部实践" },
    },
    {
      index: "02",
      label: "NOTES",
      title: "我的思考",
      description: "关于 AI、产品和技术的一些仍在变化中的判断。",
      items: getThoughts()
        .slice(0, 2)
        .map((t) => ({
          title: shortTitle(t.title),
          href: `/thoughts/${t.slug}`,
        })),
      more: { href: "/thoughts", label: "查看全部思考" },
    },
    {
      index: "03",
      label: "RESOURCES",
      title: "好物共享",
      description: "真正给我带来帮助的书、工具、论文和资料。",
      items: getResources()
        .slice(0, 2)
        .map((r) => ({
          title: shortTitle(r.name),
          href: r.url,
          external: true,
        })),
      more: { href: "/resources", label: "查看全部资源" },
    },
  ];

  return (
    <>
      {/* Small intro（§8）：极简，左对齐，不 Bold */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <Container>
          <p className="max-w-xl text-lg leading-relaxed text-foreground sm:text-xl">
            个人的思考、成长和实践。
          </p>
        </Container>
      </section>

      {/* Three entrances（§9）：Editorial Column，不用 Card */}
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-14 md:grid-cols-3 md:gap-10">
            {entrances.map((entrance) => (
              <div key={entrance.index}>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {entrance.index} / {entrance.label}
                </p>
                <h2 className="mt-3 text-xl font-medium tracking-tight text-foreground">
                  {entrance.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {entrance.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {entrance.items.map((item) => (
                    <li key={item.href}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-[15px] text-foreground transition-colors hover:text-accent"
                        >
                          {item.title}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:translate-y-[-2px]"
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="group inline-flex items-center gap-1.5 text-[15px] text-foreground transition-colors hover:text-accent"
                        >
                          {item.title}
                          <ArrowRight
                            className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>

                <Link
                  href={entrance.more.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                >
                  {entrance.more.label}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
