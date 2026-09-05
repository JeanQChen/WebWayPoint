export type ProjectStatus =
  | "building"
  | "iterating"
  | "completed"
  | "archived";

export interface ProjectLinks {
  github?: string;
  demo?: string;
  document?: string;
}

export interface EvolutionStage {
  id: string;
  /** 展示标签，如 "01 · GENERAL LLM" */
  label: string;
  title: string;
  /** 可选的补充说明 */
  summary?: string;
  /** 可选的小型流程（每一段是一个节点） */
  flow?: string[];
  /** WHAT I WANTED —— 当时想解决什么 */
  wanted: string[];
  /** WHAT BROKE —— 出现了什么问题（可为空） */
  broke: string[];
  /** WHAT CHANGED —— 后来做了什么改变 */
  changed: string[];
  /** WHAT I LEARNED —— 形成了什么新认识 */
  learned: string[];
  /** 是否为当前阶段 */
  current?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  titleEn?: string;
  description: string;
  featured: boolean;
  status: ProjectStatus;
  tags: string[];
  links?: ProjectLinks;
  evolution?: EvolutionStage[];
}

export type ThoughtStatus = "drafting" | "researching" | "planned";

export interface Thought {
  slug: string;
  title: string;
  subtitle?: string;
  status: ThoughtStatus;
  tags: string[];
}

export interface Resource {
  slug: string;
  name: string;
  url: string;
  /** 类别，如 Paper / Tooling / Dataset */
  category: string;
  /** 它是什么 */
  description: string;
  /** 为什么值得看 */
  why: string;
  /** 和什么问题相关 */
  relatedTo: string;
  tags: string[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  /** 部署域名，用于 canonical / OG / sitemap（部署后更新） */
  siteUrl: string;
  githubUrl?: string;
}
