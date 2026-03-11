import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import type { BlogPost, BlogPostType } from "@/lib/blog-types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const FALLBACK_TYPE: BlogPostType = "article";

const toBlogType = (value: unknown): BlogPostType => {
  if (value === "poem" || value === "essay" || value === "musing" || value === "article") {
    return value;
  }
  return FALLBACK_TYPE;
};

const toIsoDate = (value: unknown): string => {
  if (value instanceof Date) {
    return value.toISOString().split("T")[0];
  }

  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }

  return "";
};

const formatDate = (value: string): string => {
  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date(timestamp));
};

const toTimestamp = (value: string): number => {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

const markdownToHtml = async (markdown: string): Promise<string> => {
  const processed = await remark().use(remarkGfm).use(remarkBreaks).use(remarkHtml).process(markdown);
  return processed.toString();
};

const getMarkdownFiles = async (): Promise<string[]> => {
  try {
    const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
    return entries.filter((entry) => entry.isFile() && entry.name.endsWith(".md")).map((entry) => entry.name);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
};

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const files = await getMarkdownFiles();

  const posts = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const filePath = path.join(BLOG_DIR, fileName);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const date = toIsoDate(data.date);
      const displayDate = typeof data.displayDate === "string" && data.displayDate.trim().length > 0
        ? data.displayDate.trim()
        : formatDate(date);

      return {
        slug,
        title: typeof data.title === "string" && data.title.trim().length > 0 ? data.title.trim() : slug,
        date,
        displayDate,
        type: toBlogType(data.type),
        contentHtml: await markdownToHtml(content),
      } satisfies BlogPost;
    })
  );

  return posts.sort((a, b) => {
    const dateDiff = toTimestamp(b.date) - toTimestamp(a.date);
    if (dateDiff !== 0) {
      return dateDiff;
    }

    return a.title.localeCompare(b.title);
  });
};
