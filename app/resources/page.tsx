import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ResourceIndexItem } from "@/components/ResourceIndexItem";
import { getResources } from "@/lib/content";

export const metadata: Metadata = {
  title: "好物共享",
  description: "真正带来帮助的书、工具、论文和资料。",
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <Container className="py-16 sm:py-24">
      <header className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          RESOURCES
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          好物共享
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted">
          Things Worth Sharing
        </p>
      </header>

      <div className="mt-12 border-b border-line">
        {resources.map((resource, index) => (
          <ResourceIndexItem
            key={resource.slug}
            resource={resource}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
}
