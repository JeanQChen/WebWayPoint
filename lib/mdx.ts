import type { MDXContent } from "mdx/types";
import CreditReportMdx from "@/content/projects/credit-report.mdx";
import ExcelToolMdx from "@/content/projects/excel-tool.mdx";

const projectMdx: Record<string, MDXContent> = {
  "credit-report": CreditReportMdx,
  "excel-tool": ExcelToolMdx,
};

/** 依据 slug 返回项目 MDX 内容组件（无匹配时返回 undefined） */
export function getProjectMdxComponent(slug: string): MDXContent | undefined {
  return projectMdx[slug];
}
