import { promises as fs } from "fs";
import matter from "gray-matter";
import dynamic from "next/dynamic";
import hydrate from "next-mdx-remote/hydrate";
 // @ts-ignore
import serialize from "next-mdx-remote/serialize";
import { MdxRemote } from "next-mdx-remote/types";
import renderToString from "next-mdx-remote/render-to-string";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import { DiscussionEmbed } from "disqus-react";

import StyledLink from "components/StyledLink";
import MainLayout from "components/MainLayout";
import { FrontMatter, POSTS_PATH } from "src/getBlogPosts";
import { NextSeo } from "next-seo";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components: MDXProviderComponents = {
  a: StyledLink, 
  // Dynamic import so posts without codeblock don't dl it
  code: dynamic(() => import("components/CodeBlock")),
  inlineCode: ({ children }: React.PropsWithChildren<{}>) => (
    <span className="px-1 font-mono rounded gray bg-yellow-100">
      {children}
    </span>
  ),
};

export default function PostPage({
  source,
  frontMatter,
}: {
  source: MdxRemote.Source;
  frontMatter: FrontMatter;
}) {
   // @ts-ignore
  const content = hydrate(source, { components });
  const {
    title,
    preview,
    description,
    subtitle,
    published,
    edited,
    slug,
  } = frontMatter;

  const subtitleText = subtitle ?? description;

  return (
    <MainLayout>
      <NextSeo title={`${title.replace("`", "")}`} description={description} />
      
      {/* insert global styles to restyle MDX */}
      <style jsx>
        {`
          & :global(p) {
            @apply py-2;
          }
        `}
      </style>
      <img src={preview} className="object-contain h-56" />

      <div className="bg-white rounded p-4">
        <h1 className="pb-2">{title}</h1>

        {subtitleText ?? <p>{subtitleText}</p>}

        <div className="text-gray-600 pt-3 flex flex-row justify-between text-sm">
          <div>Published {published}</div>
          <div>Edited {edited}</div>
          <div>
            Written by <StyledLink href="/contact">@CallumJHays</StyledLink>
          </div>
        </div>

        <hr className="my-4" />

        <MDXProvider components={components}>{content}</MDXProvider>

        <hr className="mb-12 mt-4" />

        <DiscussionEmbed
          shortname="callumjhays"
          config={{
            url: `https://callumjhays.github.io/blog/${slug}`,
            identifier: slug,
            title: title,
          }}
        />
      </div>
    </MainLayout>
  );
}

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const postFilePath = `${POSTS_PATH}/${slug}.mdx`;
  const source = await fs.readFile(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    // @ts-ignore: typings seem to have broken after updating next-remote-mdx
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require("rehype-preset-minify")],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = (await fs.readdir(POSTS_PATH))
    // Remove file extensions for page paths
    .map((path) => ({
      params: {
        slug: path.replace(/\.mdx?$/, ""),
      },
    }));

  return {
    paths,
    fallback: false,
  };
};
