import type { MDXComponents } from "mdx/types";
import { CurrentFocus } from "@/components/CurrentFocus";
import { DesignDecisions } from "@/components/DesignDecisions";
import { EvaluationLayers } from "@/components/EvaluationLayers";
import { Figure } from "@/components/Figure";
import { KeyStatement } from "@/components/KeyStatement";
import { Overview } from "@/components/Overview";
import { SystemMap } from "@/components/SystemMap";

const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-24 scroll-mt-24 text-[24px] font-semibold tracking-tight text-foreground sm:text-[28px]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 text-[19px] font-medium tracking-tight text-foreground sm:text-[20px]"
      {...props}
    />
  ),
  h4: (props) => (
    <h4 className="mt-6 text-base font-medium text-foreground" {...props} />
  ),
  p: (props) => (
    <p
      className="mt-5 max-w-[760px] text-[15px] leading-relaxed text-foreground sm:text-base"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-5 max-w-[760px] list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-foreground sm:text-base"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 max-w-[760px] list-decimal space-y-2 pl-5 text-[15px] leading-relaxed text-foreground sm:text-base"
      {...props}
    />
  ),
  li: (props) => <li className="pl-1" {...props} />,
  strong: (props) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props) => <em className="italic" {...props} />,
  code: (props) => (
    <code
      className="rounded-[4px] bg-surface px-1.5 py-0.5 font-mono text-[13px] text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-5 overflow-x-auto rounded-[6px] border border-line bg-surface p-4"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-5 max-w-[760px] border-l-2 border-line pl-4 text-muted"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-accent underline decoration-accent/40 underline-offset-2 transition-colors hover:decoration-accent"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-8 border-line" {...props} />,
  Figure,
  KeyStatement,
  Overview,
  SystemMap,
  DesignDecisions,
  EvaluationLayers,
  CurrentFocus,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
