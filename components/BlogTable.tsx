import { FrontMatter } from "src/getBlogPosts";
import Link from "next/link";

export default function BlogTable({
  blogPosts,
  small,
}: {
  blogPosts: FrontMatter[];
  small: boolean;
}) {
  return (
    <table className="w-full border-collapse overflow-hidden">
      <tbody>
        {blogPosts.map((post, idx) => {
          const url = `/blog/${post.slug}`;
          //   const isLastBlogPost = idx === blogPosts.length - 1;

          return (
            <Link key={post.slug} href={url} className="p-4">
              <tr className="cursor-pointer transform transition hover:bg-green-50">
                <td
                  className={
                    small
                      ? "p-2 border-t border-b border-slate-50 w-9"
                      : "p-2 border-t border-b border-slate-50 w-16"
                  }
                >
                  <img
                    src={`blog/${post.preview}`}
                    className={"object-contain"}
                  />
                </td>

                <td className="p-2 border-t border-b border-slate-50">
                  <div className="w-full">
                    <h2 className={small ? "text-sm" : ""}>{post.title}</h2>
                    {!small && post.subtitle ? <p>{post.subtitle}</p> : null}
                  </div>
                </td>
              </tr>
            </Link>
          );
        })}
      </tbody>
    </table>
  );
}
