import { promises as fs } from "fs";
import { GetStaticProps } from "next";
import Link from "next/link";
import matter from "gray-matter";

import Panel from "components/Panel";
import MainLayout from "components/MainLayout";

export type FrontMatter = {
  title: string;
  subtitle?: string;
  description?: string; // for meta tag, if not included, defaults to 'subtitle' (if included)
  tags?: string[];
  preview: string; // image path (inside assets/blog dir)
  published: string; // 1 Jan 2020 (format)
  edited: string; // 1 Jan 2020 (format)
  slug: string; // gets added in /blog/index.tsx
};

export const POSTS_PATH = "pages/blog/posts";

type Props = {
  blogPosts: FrontMatter[];
};

export default function BlogIndexPage({ blogPosts }: Props) {
  return (
    <MainLayout>
      <style jsx>{`
        .post-list {
          @apply grid;

          grid-template-columns: 1fr 8fr;
        }
      `}</style>

      <h1 className="my-10 ml-4">Blog Posts</h1>

      <Panel>
        <table className="w-full">
          <tbody>
            {blogPosts.map((post, idx) => {
              const url = `/blog/${post.slug}`;
              const isLastBlogPost = idx === blogPosts.length - 1;

              return (
                <Link key={post.slug} href={url}>
                  <tr className="cursor-pointer transform transition hover:scale-105">
                    <td
                      className={`float-right p-2 hidden sm:block ${
                        isLastBlogPost ? null : "border-b"
                      }`}
                    >
                      <img
                        src={require(`assets/blog/${post.preview}`)}
                        className="h-20 object-contain"
                      />
                    </td>

                    <td className={`p-2 ${isLastBlogPost ? null : "border-b"}`}>
                      <h2>{post.title}</h2>
                      {post.subtitle ? <p>{post.subtitle}</p> : null}
                    </td>
                  </tr>
                </Link>
              );
            })}
          </tbody>
        </table>
      </Panel>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const files = await fs.readdir(POSTS_PATH);

  const allBlogPosts = await Promise.all(
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

  const publishedBlogPosts = allBlogPosts.filter(
    ({ slug }) => !slug.endsWith(".draft")
  );

  console.log({ publishedBlogPosts });

  return {
    props: { blogPosts: publishedBlogPosts },
  };
};
