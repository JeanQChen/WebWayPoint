import type { ProjectStatus, ThoughtStatus } from "./types";

/** 拼接 className，忽略 falsy 值 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

export const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  building: "BUILDING",
  iterating: "ITERATING",
  completed: "COMPLETED",
  archived: "ARCHIVED",
};

export const THOUGHT_STATUS_LABELS: Record<ThoughtStatus, string> = {
  drafting: "DRAFTING",
  researching: "RESEARCHING",
  planned: "PLANNED",
};

export function projectStatusLabel(status: ProjectStatus): string {
  return PROJECT_STATUS_LABELS[status] ?? status;
}

export function thoughtStatusLabel(status: ThoughtStatus): string {
  return THOUGHT_STATUS_LABELS[status] ?? status;
}

/** 取一段文本的首句（以中英文句号 / 感叹 / 问号结尾），用于列表的一行简介 */
export function firstSentence(text: string): string {
  const match = text.match(/^[^。.!！?？]+[。.!！?？]?/);
  return match ? match[0].trim() : text;
}
