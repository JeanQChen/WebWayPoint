import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ThoughtIndexItem } from "@/components/ThoughtIndexItem";
import { getThoughts } from "@/lib/content";

export const metadata: Metadata = {
  title: "我的思考",
  description: "关于 AI、产品和技术的一些仍在变化中的判断。",
};

export default function ThoughtsPage() {
  const thoughts = getThoughts();

  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          THOUGHTS
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          我的思考
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          一些还在变化中的想法。
        </p>
      </header>

      <div className="mt-12 border-b border-line">
        {thoughts.map((thought, index) => (
          <ThoughtIndexItem key={thought.slug} thought={thought} index={index} />
        ))}
      </div>
    </Container>
  );
}
