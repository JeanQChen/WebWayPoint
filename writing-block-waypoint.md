# Waypoint V1 网站设计文档
## Financial AI Product Portfolio

---

# 1. 网站定位

## 1.1 网站名称

**Waypoint**

第一阶段使用纯文字品牌，不设计复杂 Logo，也不需要专门解释名字来源。

Header 品牌直接显示：

```text
Waypoint
```

辅助说明建议：

```text
PROJECTS · SYSTEMS · NOTES
```

相比：

```text
FINANCIAL AI · PRODUCT · AGENT
```

更推荐前者。

原因是它更像长期个人作品品牌，不会把网站锁死在某一个岗位标签上。

---

## 1.2 网站是什么

Waypoint 是一个：

**公开访问、非实名、中文为主的金融 AI 产品作品集网站。**

核心内容包括：

1. 项目展示
2. 项目复盘
3. 技术 / 产品思考文章
4. 开源资源分享

它不是：

- 个人简历网站
- 传统博客
- AI SaaS Landing Page
- 社交内容平台

更接近：

```text
Product Portfolio
+
Case Study
+
Research Notes
```

---

# 2. 网站目标

核心访问者：

- AI 产品经理面试官
- 银行 / 金融科技招聘人员
- 金融 AI 从业者
- Agent / RAG / AI Engineering 从业者

网站最重要的使用场景：

> 面试官通过一个链接快速理解我的项目实践和产品思考。

因此优先级是：

```text
快速理解
>
可信度
>
思考深度
>
视觉效果
```

---

# 3. 网站希望留下的印象

访问者最终应形成三个判断。

### 1. 我理解金融业务问题

项目不是为了使用 AI 而使用 AI，而是从真实金融工作流程出发。

### 2. 我确实在做 AI 产品

不仅调用 LLM，也会考虑：

- Workflow
- RAG
- Prompt
- Evaluation
- Evidence
- Harness
- Observability
- Error Handling
- Cost
- Latency
- Reliability

### 3. 我会持续复盘并改变自己的方法

尤其通过授信报告生成器体现：

> 项目不仅在演进，我构建 AI 产品的方法也在演进。

Waypoint 本身也强调这种状态：

> 每一个项目阶段都只是一个节点，而不是终点。

这句话不需要直接展示在首页，只作为整体设计理念。

---

# 4. 隐私与语言

## 4.1 不公开

网站不展示：

- 真实姓名
- 公司名称
- 学校名称
- 电话
- 私人邮箱
- 其他直接身份信息

不做传统 Resume 页面。

统一通过 **Waypoint** 作为网站身份。

---

## 4.2 项目数据

项目展示全部使用：

- 虚拟数据
- 模拟案例
- 公开信息

项目详情页轻量显示：

> 本项目展示内容使用虚拟、模拟或公开数据，不包含真实客户及内部业务信息。

---

## 4.3 语言

中文为主。

英文只用于：

- 专业术语
- Tag
- Section Label
- 项目英文名称

不实现中英文切换。

---

# 5. 总体信息架构

一级导航：

```text
Waypoint

项目
思考
资源
关于

GitHub ↗
```

URL：

```text
/

/projects

/projects/credit-report

/projects/excel-tool

/thoughts

/thoughts/[slug]

/resources

/about
```

---

# 6. 一个重要的信息架构原则

**Project Evolution 和 Current Focus 不属于整个网站。**

它们属于具体项目。

因此首页不能出现独立的：

```text
PROJECT EVOLUTION

CURRENT FOCUS
```

作为网站一级板块。

正确关系是：

```text
Waypoint
│
├── Projects
│
│   ├── Credit Report Generator
│   │   ├── Overview
│   │   ├── Evolution
│   │   ├── Current System
│   │   ├── Design Decisions
│   │   ├── Evaluation
│   │   ├── Failures
│   │   └── Current Focus
│   │
│   └── Excel Project
│
├── Thoughts
│
├── Resources
│
└── About
```

首页只负责：

> 告诉用户有哪些值得看的东西。

项目详情页负责：

> 把一个项目完整讲清楚。

---

# 7. 首页结构

首页顺序：

```text
Header

Hero

Projects
  ├── Featured Project：授信报告生成器
  └── Other Project：Excel

Thoughts

Resources

About Waypoint

Footer
```

首页尽量克制。

不要把授信报告项目的全部内容直接塞进首页。

---

# 8. Hero

辅助标签：

```text
PROJECTS · SYSTEMS · NOTES
```

H1：

> 把复杂金融工作，  
> 做成可验证、可迭代的 AI 系统。

Description：

> 记录金融 AI 产品的构建、复盘与研究。  
> 关注 RAG、Agent Workflow、Evaluation、Evidence，以及系统如何从 Demo 一步步走向可靠产品。

CTA：

```text
查看项目 →

GitHub ↗
```

可保留次要入口：

```text
浏览思考
```

不使用：

```text
Hello, I'm ...
```

不强调个人身份。

---

# 9. Projects 首页板块

标题：

```text
PROJECTS
项目
```

授信报告生成器是旗舰项目。

Excel 项目属于辅助项目。

两者视觉权重必须明显不同。

---

# 10. Featured Project
## 授信报告生成器

英文：

```text
Credit Report Generator
```

状态：

```text
ITERATING
```

推荐首页摘要：

> 一个围绕授信研究和报告生成构建的金融 AI 项目。

> 从最初直接使用通用 LLM 生成报告，到 OCR + Workflow、Vibe Coding、最小单元测试、专业金融分析模块、RAG、Evaluation，再逐步走向 Evidence、Harness、Observability 与 Reliability。

Tags：

```text
Financial AI

RAG

Workflow

Evaluation

Evidence

Harness
```

外部按钮支持：

```text
GitHub ↗

Demo ↗

项目文档 ↗
```

不存在 URL 的按钮完全不显示。

主要 CTA：

```text
查看完整 Case Study →
```

---

# 11. Excel 项目

Excel 项目放在：

```text
OTHER PROJECTS
```

中。

视觉尺寸明显小于授信项目。

主要承担辅助证明作用：

- 自动化
- 数据处理
- Workflow
- AI Coding
- 工程实践

不要和授信报告生成器做成两个完全相同的大 Card。

---

# 12. 授信报告项目页面

URL：

```text
/projects/credit-report
```

页面类型：

**Product Case Study**

页面主要结构：

```text
01 Overview

02 Project Evolution

03 Current System

04 Key Design Decisions

05 Evaluation & Reliability

06 Things That Didn't Work

07 Current Focus

08 Evidence / Demo / GitHub / Docs
```

其中：

**Project Evolution 是整个项目页最重要的内容之一。**

---

# 13. Overview

顶部快速回答四个问题。

### Problem

授信研究需要处理：

- 企业信息
- 财务数据
- 行业信息
- 信用风险
- 项目信息
- 大量外部资料

### Product

使用 AI 辅助完成：

- 信息提取
- 资料检索
- 数据分析
- 专业分析
- 交叉校验
- 报告生成

### Product Boundary

AI 可以：

```text
事实整理
数据分析
信息检索
专业解读
报告草稿
交叉校验
```

AI 不负责：

```text
最终授信判断
审批决策
风险责任替代
```

核心表达：

```text
AI assists judgment.

AI does not replace judgment.
```

### Status

```text
ITERATING
```

该项目仍在持续开发和重构。

---

# 14. Project Evolution

项目真实演进必须按下面的逻辑展示。

不要重新包装成：

```text
Generate
→ Evidence
→ Evaluation
```

这种抽象技术概念时间线。

项目真正重要的是：

> 当时想解决什么 → 遇到了什么 → 为什么改变 → 后来学到了什么。

---

# 15. Evolution 展示方式

V1 不做传统日期 Timeline。

不要强调：

```text
2025.03
2025.05
2025.07
```

而使用：

```text
EVOLUTION PATH
```

这个名称也和 **Waypoint** 的品牌天然契合，但不需要刻意强调。

每一个阶段一个节点。

统一包含四个信息字段：

```text
WHAT I WANTED
当时想解决什么

WHAT BROKE
出现了什么问题

WHAT CHANGED
后来做了什么改变

WHAT I LEARNED
形成了什么新认识
```

Desktop 可以采用纵向大 Timeline 或交错布局。

Mobile 统一改成纵向。

---

# 16. Evolution 01
## 通用 LLM 生成报告

Label：

```text
01
GENERAL LLM
```

### What I Wanted

验证通用大模型是否能够根据输入资料生成授信报告。

初始流程：

```text
资料
↓
通用 LLM
↓
报告文本
```

### What Broke

逐渐发现：

- 输入资料处理粗糙
- 生成过程不可控
- 缺少业务流程
- 专业分析依赖模型本身
- 很难稳定复现
- 很难判断输出是否正确

### What Changed

开始考虑：

> 报告生成不能只有 Prompt，需要 Workflow。

### What I Learned

LLM 可以生成文本，但：

> “能够生成报告”不等于“形成一个可以工作的产品”。

---

# 17. Evolution 02
## OCR + Workflow

Label：

```text
02
OCR + WORKFLOW
```

主要通过扣子搭建。

### What I Wanted

开始处理真实文档输入：

```text
文档
↓
OCR
↓
Workflow
↓
LLM
↓
结果
```

### What Broke

开始遇到：

- Workflow 越来越复杂
- 多步骤状态需要管理
- 平台能力开始限制产品设计
- 系统仍然不是一个完整独立应用

### What Changed

决定开始自己构建 Web 应用。

### What I Learned

第一次明确：

> AI 产品不是一个 Prompt，而是一整套数据输入、任务拆解、执行和输出流程。

---

# 18. Evolution 03
## Vibe Coding HTML Application

Label：

```text
03
APPLICATION
```

### What I Wanted

通过 Vibe Coding 把 Workflow 变成一个真正的 HTML / Web 应用。

目标：

```text
上传资料
↓
执行分析
↓
生成结果
↓
展示报告
```

### What Broke

页面逐渐做出来了，但：

> 无法稳定生成完整报告。

主要问题并不是页面做不出来，而是：

- 缺少单元测试
- 没有稳定验收机制
- 不知道某个模块是否真正完成
- 模块组合后问题不断累积

最终形成：

> 有网页，但没有真正完成一个可靠工作的完整系统。

### What Changed

停止继续堆功能。

重新设计开发方法。

### What I Learned

核心认知：

```text
能让 AI 写出代码
≠
能让 AI 构建可靠的软件
```

---

# 19. Evolution 04
## 从 Vibe Coding 到 Vibe Coding 项目管理

Label：

```text
04
ENGINEERING METHOD
```

这是非常重要的阶段。

### What I Wanted

解决：

> AI 能快速写代码，但整个项目越来越难控制的问题。

### What Changed

建立新的开发模式：

```text
需求
↓
设计文档
↓
拆解最小单元
↓
实现
↓
最小单元测试
↓
单元审计
↓
确认通过
↓
进入下一单元
```

每一个模块都要求：

- 设计文档
- 明确输入
- 明确输出
- 明确依赖
- 明确异常
- 最小单元测试
- 验收标准
- 修改记录

### What I Learned

开发方式从：

> 让 AI 帮我写代码。

变成：

> 我开始管理 AI 构建软件。

---

# 20. 最小单元原则

这是授信项目本身的重要方法。

任何复杂能力必须拆分成：

**最小可验证单元。**

例如：

```text
PDF 读取

OCR

字段提取

财务指标计算

RAG Retrieval

Citation

行业分析

信用分析

项目分析

报告整合
```

单元只有在：

```text
设计明确
+
独立运行
+
最小测试通过
+
异常可观察
```

之后，才能被上层模块调用。

---

# 21. Evolution 05
## 财报逻辑优化

Label：

```text
05
FINANCIAL LOGIC
```

基础工程逐渐稳定后，开始真正进入金融专业逻辑。

关注：

```text
财务数据获取
↓
结构化
↓
指标计算
↓
趋势 / 异常识别
↓
财务分析
↓
报告表达
```

核心原则：

```text
LLM interprets.

Code calculates.
```

即：

> 财务计算尽量由确定性代码完成，大模型负责专业解释，而不是让语言模型“凭感觉计算”。

---

# 22. Evolution 06
## 专业分析体系 + RAG

Label：

```text
06
DOMAIN SYSTEM
```

这一阶段开始系统性优化：

- RAG
- System Prompt
- 上下文组织
- 专业分析逻辑
- 模块之间的信息流

并逐渐形成几个相对独立的专业能力：

```text
财报分析

信用分析

行业分析

项目分析

整合与校验
```

系统从：

```text
一个模型
↓
直接生成报告
```

转变为：

```text
资料与数据
↓
多个专业分析能力
↓
结构化输出
↓
整合
↓
交叉校验
↓
最终报告
```

---

# 23. Evolution 07
## Evaluation

Label：

```text
07
EVALUATION
```

随着系统越来越复杂，新的问题出现：

> 我怎么知道一个改动真的让系统变好了？

因此开始建立 Evaluation 体系。

可以分成：

```text
Component Evaluation
↓
Capability Evaluation
↓
System Evaluation
```

例如：

### Component

```text
RAG Retrieval

财务计算

OCR

Source Parsing
```

### Capability

```text
财报分析

信用分析

行业分析

项目分析
```

### System

```text
完整授信报告
```

评估方向包括：

```text
Accuracy

Completeness

Groundedness

Consistency

Citation Quality

Tool Success

Latency

Cost
```

项目开始从：

> “感觉这个版本更好”

转向：

> “如何定义并验证什么叫更好”。

---

# 24. Evolution 08
## Evidence + Harness + RAG Architecture + Observability

Label：

```text
08
RELIABILITY
```

这是项目当前阶段。

目前主要继续优化：

### Evidence Architecture

让：

```text
Source
↓
Evidence
↓
Fact
↓
Interpretation
↓
Report
```

形成可追溯链路。

### Harness

明确每个 Agent / AI 能力的：

```text
Goal

Input

Output

Tools

State

Stop Condition

Error Return
```

### RAG Architecture

继续优化：

- Query Classification
- Routing
- Retrieval Strategy
- Recall
- Context Organization
- Reranking
- Validation
- Fallback

### Observability

建立：

```text
Trace

Status

Error

Latency

Cost

Audit
```

### Reliability

核心问题已经从：

> 系统能不能完成任务？

进一步变成：

> 系统为什么得出这个结果？

> 如果失败，失败在哪里？

> 为什么失败？

> 如何恢复？

> 如何证明新版本比旧版本更可靠？

---

# 25. Current System

Evolution 之后展示：

```text
CURRENT SYSTEM
```

这里展示**当前架构**，而不是历史架构。

推荐使用 HTML / CSS / SVG 原生实现，不使用不可编辑的静态截图作为唯一架构图。

示意：

```text
                     Input
                       │
                       ↓
                Document Layer
                 OCR / Parsing
                       │
                       ↓
                 Routing Layer
                       │
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
 Financial         Credit          Industry
 Analysis          Analysis         Analysis
       │               │               │
       └───────────────┼───────────────┘
                       ↓
               Project Analysis
                       ↓
                Evidence Layer
                       ↓
               Integration / Check
                       ↓
                    Report
                       ↓
                 Human Review
```

实际结构以后根据真实代码继续调整。

---

# 26. Key Design Decisions

项目详情页单独展示几个关键设计判断。

### Workflow vs Agent

确定性强的任务优先 Workflow。

具有不确定搜索、判断、补充信息需求的任务才考虑 Agent。

### LLM vs Code

```text
Code calculates.

LLM interprets.
```

### Generate vs Verify

系统不只负责：

```text
Generate
```

也需要：

```text
Verify
```

### Modular vs Monolithic

避免一个大型 Agent 从头做到尾。

优先：

```text
Small Capability
+
Clear Contract
+
Independent Evaluation
```

---

# 27. Things That Didn't Work

项目不能只展示成功。

必须保留失败与复盘。

至少包含：

### 1. Vibe Coding 只有网页、无法完整生成报告

原因：

缺少最小单元测试和可靠验收机制。

### 2. 模块表面完成，但组合后失败

原因：

单元边界、输入输出和错误回传不足。

### 3. 早期过度依赖通用模型能力

问题：

专业逻辑没有被显式设计。

### 4. RAG / Prompt 优化缺少系统 Evaluation

问题：

无法确认变化究竟是改进还是偶然。

每一个 Failure 使用：

```text
Problem

Why It Happened

What Changed

What I Learned
```

展示。

---

# 28. Current Focus

**Current Focus 只属于授信报告项目。**

放在项目页接近结尾的位置。

当前重点：

### Evidence Architecture

让来源、事实、分析和报告可以相互追溯。

### Harness

进一步明确 Agent 的边界和运行契约。

### RAG Architecture

优化路由、召回、上下文组织和验证。

### Evaluation

完善持续回归评测体系。

### Observability & Reliability

完善：

```text
Trace
Cost
Latency
Audit
Error
Fallback
```

---

# 29. Thoughts

一级导航：

```text
思考
THOUGHTS
```

文章目前是：

**已有研究方向，但正文尚未正式完成。**

因此不要写：

```text
暂无文章
```

也不要编造完整文章。

页面展示：

```text
RESEARCH NOTES / UPCOMING
```

或者：

```text
正在整理
```

---

# 30. 当前确定的文章选题一

推荐标题：

# RAG 不只是召回：用路由器重新设计检索策略

副标题可暂时写：

> 如何先识别问题类型，再选择不同 Retrieval Strategy，而不是让所有问题走同一套 RAG Pipeline。

核心关键词：

```text
RAG

Router

Query Classification

Retrieval Strategy

Hybrid Routing
```

当前状态：

```text
DRAFTING
```

只展示标题即可，不需要现在编写文章正文。

---

# 31. 当前确定的文章选题二

推荐标题：

# 从知识图谱到本体：LLM 如何获得多跳关系与逻辑推理能力

副标题可暂时写：

> 当 Graph 解决“关系怎么连接”，Ontology 进一步回答“这些关系意味着什么”。

核心关键词：

```text
LLM

Knowledge Graph

Ontology

GraphRAG

Reasoning

OWL
```

状态：

```text
RESEARCHING
```

V1 只需要展示标题。

不要把当前研究材料直接自动扩写成文章。

---

# 32. Thoughts 页面设计

当前每个 Thought Card 展示：

```text
状态

标题

一句话研究方向

Tags
```

例如：

```text
DRAFTING

RAG 不只是召回：
用路由器重新设计检索策略

RAG · Router · Retrieval
```

暂时没有正文时：

**不要显示“阅读全文”。**

---

# 33. Resources

一级页面：

```text
资源
RESOURCES
```

目的不是做收藏夹。

每一项至少包含：

```text
名称

链接

类别

它是什么

为什么值得看

和什么问题相关
```

支持 Tags：

```text
RAG

Agent

Evaluation

Observability

Knowledge Graph

Ontology

Tooling

Paper

Dataset
```

第一阶段可以实现简单 Filter。

不需要搜索框。

---

# 34. About

页面：

```text
/about
```

标题：

```text
ABOUT WAYPOINT
```

推荐正文：

> Waypoint 是一个记录金融 AI 产品实践、项目复盘与技术思考的个人作品站。

> 这里主要关注一个问题：

> 复杂、专业且高可靠要求的金融工作，应该如何与 AI 结合？

> 相比“让模型生成一个答案”，这里更关注系统如何被构建、如何被测试、如何获得证据、如何被评测，以及一个 Demo 如何一步一步演进成更可靠的产品。

最后一段可写：

> 每个项目都只是一个阶段节点。这里记录的是这些节点之间，方法、系统和判断如何发生变化。

Current Interests：

```text
Financial AI

AI Product

RAG

Agent

Evaluation

Evidence

Knowledge Graph

Ontology
```

底部：

```text
GitHub ↗
```

---

# 35. 视觉系统

整体风格：

**Dark Navy / 深蓝。**

关键词：

```text
Deep

Calm

Technical

Precise

Research

Evidence
```

不要：

- Cyberpunk
- Neon
- 大面积 AI 紫
- 粒子动画
- 机器人
- 复杂 3D
- 过量 Glassmorphism

网站应该像：

> 一个认真构建 AI 产品的人整理自己的项目、实验和研究。

---

# 36. 推荐颜色

```text
Page Background
#07111F

Section
#0A1829

Card
#0D2138

Elevated Card
#102944

Primary Text
#EAF1F8

Secondary Text
#9FB1C5

Accent
#5BB7FF
```

强调蓝少量使用。

---

# 37. Typography

中文：

```text
PingFang SC
Microsoft YaHei
Noto Sans SC
system-ui
```

英文：

```text
Inter
```

Mono：

```text
JetBrains Mono
```

如果字体加载影响性能，则优先系统字体。

---

# 38. 技术栈

推荐：

```text
Next.js

TypeScript

Tailwind CSS

MDX

Lucide Icons
```

部署：

```text
Vercel
```

优先：

```text
Static Generation

Server Components
```

尽量减少 Client JavaScript。

---

# 39. 内容管理

网站 V1：

**公开只读。**

不实现：

- Login
- CMS
- Database
- Admin
- 评论
- 点赞
- 用户系统

内容采用：

```text
Git
+
MDX
+
TypeScript Data
```

管理。

---

# 40. 推荐目录

```text
/app

  page.tsx

  /projects
    page.tsx

    /[slug]
      page.tsx

  /thoughts
    page.tsx

    /[slug]
      page.tsx

  /resources
    page.tsx

  /about
    page.tsx


/components

  Header.tsx

  Footer.tsx

  Hero.tsx

  FeaturedProject.tsx

  ProjectCard.tsx

  EvolutionTimeline.tsx

  EvolutionStage.tsx

  ArchitectureDiagram.tsx

  ResourceCard.tsx

  ThoughtCard.tsx

  ExternalLinks.tsx

  StatusBadge.tsx

  Tag.tsx


/content

  /projects
    credit-report.mdx
    excel-tool.mdx

  /thoughts


/data

  resources.ts


/lib

  content.ts

  utils.ts
```

---

# 41. Project 数据结构

```ts
interface Project {
  slug: string
  title: string
  titleEn?: string
  description: string

  featured: boolean

  status:
    | "building"
    | "iterating"
    | "completed"
    | "archived"

  tags: string[]

  links?: {
    github?: string
    demo?: string
    document?: string
  }

  evolution?: EvolutionStage[]
}
```

---

# 42. Evolution 数据结构

```ts
interface EvolutionStage {
  id: string

  label: string

  title: string

  summary?: string

  wanted: string

  broke: string

  changed: string

  learned: string

  current?: boolean
}
```

Evolution 内容必须来自数据。

不要把 8 个阶段全部硬编码进组件。

---

# 43. 最小单元测试原则
## 同样适用于 Waypoint 网站自身

这个网站的开发方法也必须遵守：

```text
Design
↓
Smallest Unit
↓
Implement
↓
Test
↓
Audit
↓
Integrate
```

不能让 Claude Code 一次性生成整个网站，然后仅通过：

> “页面能打开”

判断开发完成。

---

# 44. 网站最小可验证单元

建议至少拆成以下单元：

```text
01 Header

02 Hero

03 FeaturedProject

04 ProjectCard

05 ExternalLinks

06 EvolutionStage

07 EvolutionTimeline

08 ThoughtCard

09 ResourceCard

10 MDX Content Loader

11 Project Data Loader

12 Resources Data

13 Responsive Navigation

14 SEO Metadata
```

每个单元独立通过测试后再向上组合。

---

# 45. 每个单元必须定义

开发每个 Component 前，需要明确：

```text
Purpose

Props / Input

Expected Output

States

Edge Cases

Responsive Behavior

Accessibility Requirements

Test Cases
```

例如：

## ExternalLinks

Input：

```ts
{
  github?: string
  demo?: string
  document?: string
}
```

Expected：

```text
有 URL → 显示对应按钮

无 URL → 不渲染按钮
```

Edge Case：

```text
全部为空
```

Expected：

```text
整个 ExternalLinks 区域不渲染
```

这就是一个最小单元。

---

# 46. 测试策略

至少包含：

### Unit Test

用于：

- 数据转换
- 条件渲染
- Content Utilities
- Status Logic
- External Links

建议：

```text
Vitest
+
React Testing Library
```

### Component Test

验证关键 UI Component：

```text
FeaturedProject

EvolutionStage

ProjectCard

ThoughtCard

ResourceCard
```

### Integration Test

至少验证：

```text
首页能够从真实 Content 数据完成渲染

Project 页面能够从 MDX 加载

Evolution 能够从数据完整生成

不存在链接时不会生成空按钮
```

### E2E Smoke Test

建议使用：

```text
Playwright
```

至少测试：

```text
首页加载

点击授信项目

进入 Project Case Study

打开 Thoughts

打开 Resources

打开 About

GitHub 外链存在时可点击

手机宽度下导航正常
```

---

# 47. 最小单元验收原则

任何模块只有满足：

```text
设计完成

+

实现完成

+

最小测试通过

+

异常路径考虑

+

Responsive 检查

+

Accessibility 基础检查
```

才算：

```text
DONE
```

不要只以：

```text
UI 看起来正常
```

作为完成标准。

---

# 48. Claude Code 开发顺序

不要一次生成整个网站。

按下面顺序实现。

## Phase 1 — Foundation

```text
Design Tokens

Layout

Typography

Header

Footer
```

测试后再继续。

## Phase 2 — Homepage Core

```text
Hero

FeaturedProject

ProjectCard
```

测试后再继续。

## Phase 3 — Content System

```text
Project Loader

MDX

Resource Data

Thought Metadata
```

测试后再继续。

## Phase 4 — Credit Report Case Study

先实现：

```text
Overview

EvolutionStage

EvolutionTimeline
```

确认 Evolution 可以正常工作。

然后：

```text
Current System

Design Decisions

Failures

Current Focus
```

## Phase 5 — Secondary Pages

```text
Projects

Thoughts

Resources

About
```

## Phase 6 — Quality

```text
Responsive

Accessibility

SEO

Performance

E2E
```

---

# 49. 每阶段完成后必须进行单元审计

每个阶段完成后 Claude Code 应检查：

```text
有没有未使用代码？

有没有重复 Component？

内容是否被硬编码？

有没有空链接？

有没有错误状态未处理？

手机端是否正常？

是否存在 Console Error？

测试是否真的覆盖关键逻辑？

有没有为了视觉加入不必要依赖？
```

发现问题先修复。

不要继续下一阶段。

---

# 50. Responsive

至少验证：

```text
375px

768px

1024px

1440px
```

重点：

### Mobile

- Header 不溢出
- Evolution 改为单列
- Architecture 改为纵向
- CTA 不挤压
- 项目 Card 不横向溢出

---

# 51. Accessibility

至少保证：

- Keyboard Navigation
- Focus State
- 合理 Contrast
- SVG 有 aria-label
- 按钮有可理解文本
- 外链语义正确
- 不仅依靠颜色表达状态
- `prefers-reduced-motion` 下减少动画

---

# 52. Animation

只允许轻量效果：

```text
hover

opacity

border

translateY(-2px)

smooth scroll

timeline active state
```

不使用：

- 大量进入动画
- 3D
- 背景粒子
- 鼠标跟随
- 重型 Animation Library

---

# 53. Performance

优先：

```text
Static Generation

Server Components

SVG

CSS
```

避免：

- 背景视频
- 大图片
- 重型 JS
- 不必要 Client Components

图片使用 Next Image。

---

# 54. SEO

首页：

```text
Waypoint | Financial AI Product Portfolio
```

Description：

> 金融 AI 产品实践、项目复盘与研究记录。关注 RAG、Agent Workflow、Evaluation、Evidence 与金融 AI 产品设计。

生成：

```text
sitemap.xml

robots.txt

canonical

OpenGraph
```

---

# 55. OG Card

深蓝背景。

建议展示：

```text
Waypoint

Projects · Systems · Notes
```

可增加较小一行：

```text
Financial AI Product Portfolio
```

无需人物照片。

---

# 56. V1 明确不做

不要开发：

```text
Login

CMS

Database

Admin

Comment

Like

Search

Newsletter

Chatbot

在线 Agent

大型 Evaluation Dashboard

复杂 Analytics
```

以后再考虑。

---

# 57. V2 可能增加

未来优先考虑：

```text
Evaluation Dashboard

Trace Viewer

Interactive Architecture

Real Demo

Project Playground

CMS

Visitor Analytics
```

优先级：

```text
项目证据能力
>
内容运营能力
```

所以：

```text
Evaluation Dashboard
>
CMS
```

---

# 58. 面试官阅读路径

## 0-10 秒

看到：

```text
Waypoint

把复杂金融工作，
做成可验证、可迭代的 AI 系统。
```

形成：

> 金融 + AI。

## 10-30 秒

看到：

```text
授信报告生成器
Credit Report Generator
```

以及：

```text
RAG
Evaluation
Evidence
Harness
```

形成：

> 有具体 AI 产品实践。

## 30 秒以后

进入 Case Study。

看到：

```text
通用 LLM
↓
OCR + Workflow
↓
Vibe Coding
↓
开发失败
↓
最小单元测试
↓
专业金融逻辑
↓
RAG / 分析体系
↓
Evaluation
↓
Reliability
```

应该形成的核心判断：

> 这个项目的价值不仅是最后做出了什么，而是作者在项目过程中不断发现自己的方法哪里有问题，并重新设计开发方式和 AI 系统。

---

# 59. Definition of Done

Waypoint V1 只有全部满足以下条件才算完成：

- 网站公开访问
- 不公开真实个人身份
- 中文为主
- 深蓝 Design System
- 首页能快速理解网站定位
- Projects 是首页核心
- 授信报告生成器明显是旗舰项目
- Excel 是辅助项目
- Project Evolution 只存在于授信项目内部
- Current Focus 只存在于授信项目内部
- Evolution 使用真实 8 阶段演进
- Evolution 能展示 Wanted / Broke / Changed / Learned
- 授信项目存在 Current System
- 授信项目存在 Failures
- 授信项目存在 Current Focus
- GitHub / Demo / 文档支持条件显示
- Thoughts 显示两个当前研究主题
- 没有虚构文章
- Resources 可以通过数据文件维护
- 项目可以通过 MDX / Data 维护
- 不需要后台
- Mobile 正常
- Accessibility 基础通过
- 无 Console Error
- 无 Broken Link
- 无 Lorem Ipsum
- 无无效 CTA
- 关键 Component 有最小单元测试
- 关键页面有 Integration Test
- 核心路径有 E2E Smoke Test
- 所有 P0/P1 测试通过后才能标记 V1 Done

---

# 60. 最终开发原则

Claude Code 始终遵循：

```text
Content
>
Information Architecture
>
Reliability
>
Readability
>
Responsive
>
Visual Polish
>
Animation
```

以及：

```text
Design
↓
Smallest Unit
↓
Implement
↓
Test
↓
Audit
↓
Integrate
```

如果“快速生成整个网站”和“逐单元验证”发生冲突：

**选择逐单元验证。**

如果“看起来很酷”和“项目表达清楚”发生冲突：

**选择表达清楚。**

如果“多功能”和“可靠可用”发生冲突：

**选择可靠可用。**

Waypoint 本身也应该体现授信报告生成器项目中形成的方法：

> 不以“代码生成完成”为完成，而以“最小单元被验证、整体系统可用”为完成。