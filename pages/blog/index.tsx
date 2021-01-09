import fg from "fast-glob";
import { IEntry } from "fast-glob/out/types/entries";
import { GetStaticProps } from "next";
import Link from "next/link";
import Panel from "components/Panel";

type FrontMatter = {
  title: string;
  image: string;
};

type Props = {
  blogPosts: (FrontMatter & {
    url: string;
    createdMs: number;
    editedMs: number;
  })[];
};

export default function BlogIndexPage({ blogPosts }: Props) {
  return (
    <Panel>
      {blogPosts.map((post) => (
        <Link key={post.url} href={post.url}>
          {post.title}
        </Link>
      ))}
    </Panel>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogPosts = await Promise.all(
    (await fg("pages/blog/*.mdx", { stats: true })).map(
      async (file: IEntry) => {
        const { path, mtimeMs, birthtimeMs } = file;
        const filename = path.match(/blog\/(.*)+\.mdx/)[1];

        // this line is very brittle. Webpack doin' some funky magic
        const frontMatter: FrontMatter = (
          await import(`pages/blog/${filename}.mdx`)
        ).frontMatter;

        return {
          url: `/blog/${filename}`,
          createdMs: birthtimeMs,
          editedMs: mtimeMs,
          ...frontMatter,
        };
      }
    )
  );

  return {
    props: {
      blogPosts,
    },
  };
};
