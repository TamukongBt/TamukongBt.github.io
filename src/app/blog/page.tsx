import BlogView from "@/app/blog/blog-view";
import { getAllBlogPosts } from "@/lib/blog";

const BlogPage = async () => {
  const posts = await getAllBlogPosts();

  return <BlogView posts={posts} />;
};

export default BlogPage;
