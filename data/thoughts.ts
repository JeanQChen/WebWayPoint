import type { Thought } from "@/lib/types";

export const thoughts: Thought[] = [
  {
    slug: "rag-router-retrieval-strategy",
    title: "RAG 不只是召回：用路由器重新设计检索策略",
    subtitle:
      "如何先识别问题类型，再选择不同 Retrieval Strategy，而不是让所有问题走同一套 RAG Pipeline。",
    status: "drafting",
    tags: [
      "RAG",
      "Router",
      "Query Classification",
      "Retrieval Strategy",
      "Hybrid Routing",
    ],
  },
  {
    slug: "knowledge-graph-ontology-reasoning",
    title: "从知识图谱到本体：LLM 如何获得多跳关系与逻辑推理能力",
    subtitle:
      "当 Graph 解决「关系怎么连接」，Ontology 进一步回答「这些关系意味着什么」。",
    status: "researching",
    tags: [
      "LLM",
      "Knowledge Graph",
      "Ontology",
      "GraphRAG",
      "Reasoning",
      "OWL",
    ],
  },
];
