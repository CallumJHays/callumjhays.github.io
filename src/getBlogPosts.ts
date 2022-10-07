// WARNING: can only be used in a page file as it relies on getStaticProps

import { promises as fs } from "fs";
import matter from "gray-matter";

export const POSTS_PATH = "pages/blog/posts";

export type FrontMatter = {
    title: string;
    subtitle?: string;
    description?: string; // for meta tag, if not included, defaults to 'subtitle' (if included)
    tags?: string[];
    preview: string; // image path (inside public/blog dir)
    published: string; // 1 Jan 2020 (format)
    edited: string; // 1 Jan 2020 (format)
    slug: string; // gets added in /blog/index.tsx
};

export default async function getBlogPosts(): Promise<FrontMatter[]> {
    const files = await fs.readdir(POSTS_PATH);
  
    const blogPosts = await Promise.all(
      files.map(async (file) => {
        const content = await fs.readFile(`${POSTS_PATH}/${file}`);
        const frontMatter = matter(content).data as FrontMatter;
        const slug = file.replace(".mdx", "");
  
        return {
          ...frontMatter,
          slug,
        };
      })
    );
  
    return blogPosts;
}