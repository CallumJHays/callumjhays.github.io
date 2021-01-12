import fg from "fast-glob";
import { GetStaticProps } from "next";
import Link from "next/link";
import Panel from "components/Panel";
import MainLayout from "layouts/main";
import StyledLink from "components/StyledLink";

export type FrontMatter = {
  title: string;
  subtitle?: string;
  description?: string; // for meta tag, if not included, defaults to 'subtitle' (if included)
  tags?: string[];
  preview: string; // image path (inside assets/blog dir)
  published: string; // 1 Jan 2020 (format)
  edited: string; // 1 Jan 2020 (format)
  __resourcePath: string; // filepath
};

type Props = {
  blogPosts: (FrontMatter & { url: string })[];
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
              const isLastBlogPost = idx === blogPosts.length - 1;
              return (
                <Link key={post.url} href={post.url}>
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
  const blogPosts = await Promise.all(
    (await fg("pages/blog/*.mdx")).map(async (filepath: string) => {
      const filename = filepath.match(/blog\/(.*)+\.mdx/)[1];

      // this line is very brittle. Webpack doin' some funky magic
      const frontMatter: FrontMatter = (
        await import(`pages/blog/${filename}.mdx`)
      ).frontMatter;

      return {
        url: `/blog/${filename}`,
        ...frontMatter,
      };
    })
  );

  return {
    props: { blogPosts },
  };
};
