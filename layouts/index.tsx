// this file exists as a layout wrapper for individual blog posts,
// consumed by the `next-mdx-enhanced` plugin.
import { MDXProvider } from "@mdx-js/react";
import CodeBlock from "components/CodeBlock";
import { DiscussionEmbed } from "disqus-react";

// This function must be named otherwise it disables Fast Refresh.
export default function BlogLayout({ children, frontMatter }) {
  // React hooks, for example `useState` or `useEffect`, go here.
  return (
    <>
      <MDXProvider components={{ code: CodeBlock }}>{children}</MDXProvider>
      <DiscussionEmbed
        shortname="callumjhays"
        config={{
          url:
            "https://callumjhays.github.io/blog/python_annotated_type_04012020", // might cause issues with SSR
          identifier: "python_annotated_type_03012020",
          title: "Python data validation via typing.Annotated",
        }}
      />
    </>
  );
}
