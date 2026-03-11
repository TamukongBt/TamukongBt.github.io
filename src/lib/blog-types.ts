export type BlogPostType = "poem" | "essay" | "musing" | "article";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  type: BlogPostType;
  contentHtml: string;
}
