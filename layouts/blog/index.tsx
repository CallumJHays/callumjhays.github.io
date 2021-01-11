// this file exists as a layout wrapper for individual blog posts,
// consumed by the `next-mdx-enhanced` plugin.
// we put it in its own folder because the plugin specifically imports 'index' from a path

import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "components/CodeBlock";
import { DiscussionEmbed } from "disqus-react";

import { FrontMatter } from "pages/blog";
import MainLayout from "layouts/main";

type Props = React.PropsWithChildren<{ frontMatter: FrontMatter }>;

// This function must be named otherwise it disables Fast Refresh. [next-mdx-enhanced]
export default function BlogLayout({ children, frontMatter, ...rest }: Props) {
  const { title, preview, description, published, edited } = frontMatter;

  return (
    <MainLayout>
      <h1>{title}</h1>
      <p>{description}</p>
      {/* <img src={require(`assets/blog/${image}`)} className="object-cover" /> */}

      <MDXProvider components={{ code: CodeBlock }}>{children}</MDXProvider>
      <DiscussionEmbed
        shortname="callumjhays"
        config={{
          url: "https://callumjhays.github.io/blog/${}", // might cause issues with SSR
          identifier: "python_annotated_type_04012020",
          title: "Python data validation via typing.Annotated",
        }}
      />
    </MainLayout>
  );
}
