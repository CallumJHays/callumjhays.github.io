// this file exists as a layout wrapper for individual blog posts,
// consumed by the `next-mdx-enhanced` plugin.
// we put it in its own folder because the plugin specifically imports 'index' from a path

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "components/CodeBlock";
import { DiscussionEmbed } from "disqus-react";

import { FrontMatter } from "pages/blog";
import MainLayout from "layouts/main";
import Panel from "components/Panel";
import Link from "next/link";
import LinkTextSpan from "components/LinkTextSpan";
import StyledLink from "components/StyledLink";

type Props = React.PropsWithChildren<{
  frontMatter: FrontMatter;
}>;

// This function must be named otherwise it disables Fast Refresh. [next-mdx-enhanced]
export default function BlogLayout({ children, frontMatter }: Props) {
  const {
    title,
    preview,
    description,
    published,
    edited,
    __resourcePath,
  } = frontMatter;

  const filename = __resourcePath.match(/blog\/(.*)+\.mdx/)[1];

  return (
    <MainLayout>
      {/* <img src={require(`assets/blog/${image}`)} className="object-cover" /> */}

      <div className="bg-white rounded p-4">
        <h1>{title}</h1>

        <div className="text-gray-600 py-6 flex flex-row justify-between text-sm">
          <div>Published {published}</div>
          <div>Edited {edited}</div>
          <div>
            Written by <StyledLink href="/contact">@CallumJHays</StyledLink>
          </div>
        </div>

        <p>{description}</p>

        <MDXProvider components={{ code: CodeBlock }}>{children}</MDXProvider>

        <hr className="my-12" />

        <DiscussionEmbed
          shortname="callumjhays"
          config={{
            url: `https://callumjhays.github.io/blog/${filename}`, // might cause issues with SSR
            identifier: filename,
            title: title,
          }}
        />
      </div>
    </MainLayout>
  );
}
