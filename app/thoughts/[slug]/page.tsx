import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { getThoughtBySlug, getThoughts } from "@/lib/content";
import { thoughtStatusLabel } from "@/lib/utils";

export function generateStaticParams() {
  return getThoughts().map((thought) => ({ slug: thought.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);
  if (!thought) return {};
  return {
    title: thought.title,
    alternates: {
      canonical: `/thoughts/${thought.slug}`,
    },
  };
}

export default async function ThoughtPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thought = getThoughtBySlug(slug);
  if (!thought) notFound();

  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {thoughtStatusLabel(thought.status)}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {thought.title}
        </h1>
        {thought.subtitle ? (
          <p className="mt-5 text-base leading-relaxed text-muted">
            {thought.subtitle}
          </p>
        ) : null}
      </header>

      <div className="mt-12 max-w-3xl border-t border-line pt-8">
        <p className="text-base leading-relaxed text-muted">
          正文正在整理中，尚未正式完成。
        </p>
      </div>
    </Container>
  );
}
