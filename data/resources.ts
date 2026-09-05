import type { Resource } from "@/lib/types";

// 资源清单（用户提供）；每项包含
// name / url / category / description(它是什么) / why(为什么值得看) / relatedTo(相关问题) / tags
export const resources: Resource[] = [
  {
    slug: "ai-agent-book",
    name: "深入理解 AI Agent：设计原理与工程实践",
    url: "https://github.com/bojieli/ai-agent-book",
    category: "Book",
    description:
      "李博杰《深入理解 AI Agent：设计原理与工程实践》开源主仓库，含全书正文、编译版 PDF 与按章配套代码。",
    why: "系统覆盖 AI Agent 从设计原理到工程落地，与授信项目中的 Harness / Agent 能力设计直接相关。",
    relatedTo: "Agent 架构设计、Harness、Workflow",
    tags: ["AI Agent", "Book", "Agent Architecture", "Engineering"],
  },
];
