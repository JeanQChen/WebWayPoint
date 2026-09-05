import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "credit-report",
    title: "授信报告生成器",
    titleEn: "Credit Report Generator",
    description:
      "一个围绕授信研究和报告生成构建的金融 AI 项目。从最初直接使用通用 LLM 生成报告，到 OCR + Workflow、Vibe Coding、最小单元测试、专业金融分析模块、RAG、Evaluation，再逐步走向 Evidence、Harness、Observability 与 Reliability。",
    featured: true,
    status: "iterating",
    tags: [
      "Financial AI",
      "RAG",
      "Workflow",
      "Evaluation",
      "Evidence",
      "Harness",
    ],
    // GitHub 地址（用户提供）；Demo / 文档待提供
    links: {
      github: "https://github.com/JeanQChen/shouxinbaogaoshengcheng_ceshi-_ver1",
    },
    evolution: [
      {
        id: "01-general-llm",
        label: "01 · GENERAL LLM",
        title: "通用 LLM 生成报告",
        summary: "能生成文本，但无法形成一个可靠工作的产品。",
        flow: ["资料", "通用 LLM", "报告文本"],
        wanted: ["验证通用大模型是否能够根据输入资料生成授信报告。"],
        broke: [
          "输入资料处理粗糙",
          "生成过程不可控",
          "缺少业务流程",
          "专业分析依赖模型本身",
          "很难稳定复现",
          "很难判断输出是否正确",
        ],
        changed: ["开始考虑：报告生成不能只有 Prompt，需要 Workflow。"],
        learned: [
          "LLM 可以生成文本，但「能够生成报告」不等于「形成一个可以工作的产品」。",
        ],
      },
      {
        id: "02-ocr-workflow",
        label: "02 · OCR + WORKFLOW",
        title: "OCR + Workflow",
        summary: "开始处理真实文档输入。",
        flow: ["文档", "OCR", "Workflow", "LLM", "结果"],
        wanted: ["开始处理真实文档输入。"],
        broke: [
          "Workflow 越来越复杂",
          "多步骤状态需要管理",
          "平台能力开始限制产品设计",
          "系统仍然不是一个完整独立应用",
        ],
        changed: ["决定开始自己构建 Web 应用。"],
        learned: [
          "第一次明确：AI 产品不是一个 Prompt，而是一整套数据输入、任务拆解、执行和输出流程。",
        ],
      },
      {
        id: "03-vibe-coding",
        label: "03 · APPLICATION",
        title: "Vibe Coding HTML 应用",
        summary: "页面做出来了，报告却没有真正跑通。",
        wanted: ["通过 Vibe Coding 把 Workflow 变成一个真正的 HTML / Web 应用。"],
        flow: ["上传资料", "执行分析", "生成结果", "展示报告"],
        broke: [
          "页面逐渐做出来了，但无法稳定生成完整报告",
          "缺少单元测试",
          "没有稳定验收机制",
          "不知道某个模块是否真正完成",
          "模块组合后问题不断累积",
        ],
        changed: ["停止继续堆功能。", "重新设计开发方法。"],
        learned: ["能让 AI 写出代码 ≠ 能让 AI 构建可靠的软件。"],
      },
      {
        id: "04-engineering-method",
        label: "04 · ENGINEERING METHOD",
        title: "从 Vibe Coding 到 Vibe Coding 项目管理",
        summary: "开始管理 AI 构建软件。",
        wanted: ["解决「AI 能快速写代码，但整个项目越来越难控制」的问题。"],
        flow: [
          "需求",
          "设计文档",
          "拆解最小单元",
          "实现",
          "最小单元测试",
          "单元审计",
          "确认通过",
          "进入下一单元",
        ],
        broke: [],
        changed: [
          "建立新的开发模式：每个模块都要求设计文档、明确输入、明确输出、明确依赖、明确异常、最小单元测试、验收标准、修改记录。",
        ],
        learned: [
          "开发方式从「让 AI 帮我写代码」变成「我开始管理 AI 构建软件」。",
        ],
      },
      {
        id: "05-financial-logic",
        label: "05 · FINANCIAL LOGIC",
        title: "财报逻辑优化",
        summary: "财务计算交给代码，大模型负责解释。",
        wanted: ["基础工程逐渐稳定后，开始真正进入金融专业逻辑。"],
        flow: [
          "财务数据获取",
          "结构化",
          "指标计算",
          "趋势 / 异常识别",
          "财务分析",
          "报告表达",
        ],
        broke: [],
        changed: [
          "财务计算尽量由确定性代码完成，大模型负责专业解释，而不是让语言模型「凭感觉计算」。",
        ],
        learned: ["Code calculates. LLM interprets."],
      },
      {
        id: "06-domain-system",
        label: "06 · DOMAIN SYSTEM",
        title: "专业分析体系 + RAG",
        summary: "多个专业能力协同、交叉校验后再整合为报告。",
        wanted: [
          "系统性优化 RAG、System Prompt、上下文组织、专业分析逻辑与模块之间的信息流。",
        ],
        flow: [
          "资料与数据",
          "多个专业分析能力",
          "结构化输出",
          "整合",
          "交叉校验",
          "最终报告",
        ],
        broke: [],
        changed: [
          "逐渐形成几个相对独立的专业能力：财报分析、信用分析、行业分析、项目分析、整合与校验。",
        ],
        learned: [
          "系统从「一个模型直接生成报告」转变为多专业能力协同、交叉校验后再整合为最终报告。",
        ],
      },
      {
        id: "07-evaluation",
        label: "07 · EVALUATION",
        title: "Evaluation",
        summary: "从「感觉更好」转向「定义并验证什么叫更好」。",
        wanted: ["回答「我怎么知道一个改动真的让系统变好了？」。"],
        broke: [],
        changed: [
          "建立分层评测体系：Component Evaluation → Capability Evaluation → System Evaluation。",
        ],
        learned: [
          "项目从「感觉这个版本更好」转向「如何定义并验证什么叫更好」。",
        ],
      },
      {
        id: "08-reliability",
        label: "08 · RELIABILITY",
        title: "Evidence + Harness + RAG Architecture + Observability",
        summary: "Evidence / Harness / RAG Architecture / Observability。",
        wanted: [
          "继续优化 Evidence、Harness、RAG Architecture、Observability 与 Reliability。",
        ],
        broke: [],
        changed: [
          "Evidence Architecture：建立 Source → Evidence → Fact → Interpretation → Report 的可追溯链路",
          "Harness：明确每个 Agent / AI 能力的 Goal、Input、Output、Tools、State、Stop Condition、Error Return",
          "RAG Architecture：优化 Query Classification、Routing、Retrieval Strategy、Recall、Context Organization、Reranking、Validation、Fallback",
          "Observability：建立 Trace、Status、Error、Latency、Cost、Audit",
        ],
        learned: [
          "核心问题从「系统能不能完成任务」变成「系统为什么得出这个结果？如果失败，失败在哪里？为什么失败？如何恢复？如何证明新版本更可靠？」",
        ],
        current: true,
      },
    ],
  },
  {
    slug: "excel-tool",
    title: "Excel 数据处理工具",
    titleEn: "Excel Data Tool",
    description:
      "一个面向 Excel 数据处理的辅助项目，围绕自动化、数据处理与 Workflow 展开，用于验证 AI Coding 与工程实践。",
    featured: false,
    status: "building",
    tags: ["Automation", "Data Processing", "Workflow", "AI Coding", "Engineering"],
    links: {},
  },
];
