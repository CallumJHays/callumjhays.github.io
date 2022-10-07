import { promises as fs } from "fs";
import { GetStaticProps } from "next";
import Link from "next/link";
import matter from "gray-matter";

import Panel from "components/Panel";
import MainLayout from "components/MainLayout";
import getBlogPosts, {FrontMatter} from "src/getBlogPosts";
import BlogTable from "components/BlogTable";

type Props = {
  blogPosts: FrontMatter[];
}

export default function BlogIndexPage({ blogPosts }: Props) {
  return (
    <MainLayout>
      <h1 className="my-10 ml-4">Blog Posts</h1>

      <Panel>
        <BlogTable blogPosts={blogPosts} small={false} />
      </Panel>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      blogPosts: await getBlogPosts()
    },
  }
}