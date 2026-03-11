"use client";

import { useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BlogPost, BlogPostType } from "@/lib/blog-types";

const typeStyles: Record<BlogPostType, string> = {
  poem: "border-bittersweet text-bittersweet",
  essay: "border-taupe text-taupe",
  musing: "border-lemonchiffon text-lemonchiffon",
  article: "border-bittersweet text-bittersweet",
};

interface BlogViewProps {
  posts: BlogPost[];
}

const BlogView = ({ posts }: BlogViewProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedSlug, setSelectedSlug] = useState(posts[0]?.slug ?? "");

  const selectedPost = useMemo(
    () => posts.find((post) => post.slug === selectedSlug) ?? posts[0],
    [posts, selectedSlug]
  );

  if (!selectedPost) {
    return (
      <div className="h-[calc(100dvh-3.5rem)] md:h-[98vh] flex items-center justify-center bg-eerieblack border border-brownsugar">
        <div className="text-center px-6">
          <p className="text-sm font-console uppercase tracking-widest text-taupe">No Posts Yet</p>
          <p className="text-lemonchiffon mt-3">Add markdown files in `content/blog` to publish your writing.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100dvh-3.5rem)] md:h-[98vh] flex flex-col bg-eerieblack w-full !text-whiteout">
      <div className="flex flex-1 min-h-0 border border-brownsugar">
        <div
          className={`hidden lg:flex flex-col bg-eerieblack border-r border-brownsugar shadow-lg transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <div className="p-4 border-b border-brownsugar">
            <h2 className="text-xs font-console uppercase tracking-widest text-taupe">Words</h2>
          </div>
          <nav className="overflow-y-auto flex-1 hide-scrollbar">
            {posts.map((post) => (
              <button
                key={post.slug}
                onClick={() => setSelectedSlug(post.slug)}
                className={`w-full text-left px-4 py-3 transition-colors duration-200 border-l-2 ${
                  selectedPost.slug === post.slug
                    ? "border-bittersweet text-lemonchiffon bg-bistre"
                    : "border-transparent text-taupe hover:text-lemonchiffon hover:bg-bistre/60"
                }`}
              >
                <p className="text-[0.65rem] font-console uppercase tracking-widest text-taupe mb-0.5">{post.type}</p>
                <p className="text-sm font-body leading-tight">{post.title}</p>
                <p className="text-[0.62rem] text-taupe mt-0.5">{post.displayDate}</p>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-eerieblack border-b border-brownsugar px-4 py-4 md:px-6 flex items-center gap-3">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              size="sm"
              variant="outline"
              className="hidden lg:flex p-1.5 h-auto border-brownsugar text-taupe hover:text-lemonchiffon"
            >
              <Menu size={16} />
            </Button>
            <div>
              <p className="text-[0.6em] font-console tracking-widest uppercase text-taupe leading-none mb-1">Blog</p>
              <h1 className="text-lg md:text-xl font-body text-lemonchiffon leading-tight">{selectedPost.title}</h1>
            </div>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col bg-eerieblack">
            <div className="lg:hidden flex overflow-x-auto p-3 gap-2 border-b border-brownsugar hide-scrollbar">
              {posts.map((post) => (
                <button
                  key={post.slug}
                  onClick={() => setSelectedSlug(post.slug)}
                  className={`flex-shrink-0 px-3 py-1.5 text-xs font-console rounded-sm border transition-colors ${
                    selectedPost.slug === post.slug
                      ? "border-bittersweet text-bittersweet bg-bistre"
                      : "border-brownsugar text-taupe hover:border-bittersweet/50 hover:text-lemonchiffon"
                  }`}
                >
                  {post.title}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto hide-scrollbar flex justify-center p-6 md:p-12 lg:p-16">
              <div className="w-full max-w-2xl">
                <span
                  className={`inline-block px-2.5 py-1 mb-6 text-[0.65rem] font-console tracking-widest uppercase border rounded-sm ${
                    typeStyles[selectedPost.type]
                  }`}
                >
                  {selectedPost.type}
                </span>
                <h2 className="text-3xl md:text-4xl font-body text-lemonchiffon mb-2 leading-tight">{selectedPost.title}</h2>
                <p className="text-xs font-console text-taupe tracking-widest uppercase mb-10">{selectedPost.displayDate}</p>
                <div className="border-l-2 border-brownsugar pl-6 md:pl-8">
                  <article
                    className="text-taupe font-body leading-loose text-base md:text-lg
                    [&_h1]:text-3xl [&_h1]:text-lemonchiffon [&_h1]:font-body [&_h1]:mb-5
                    [&_h2]:text-2xl [&_h2]:text-lemonchiffon [&_h2]:font-body [&_h2]:mb-4 [&_h2]:mt-8
                    [&_h3]:text-xl [&_h3]:text-lemonchiffon [&_h3]:font-body [&_h3]:mb-3 [&_h3]:mt-6
                    [&_p]:mb-5 [&_strong]:text-lemonchiffon [&_em]:text-taupe
                    [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5
                    [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5
                    [&_li]:mb-1.5 [&_hr]:border-brownsugar [&_hr]:my-8
                    [&_a]:text-bittersweet [&_a:hover]:text-lemonchiffon"
                    dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
