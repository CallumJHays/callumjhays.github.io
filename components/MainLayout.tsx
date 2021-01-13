// import StyledLink from "components/StyledLink";
import Link from "next/link";

export default function MainLayout({
  children,
  footer = true,
}: React.PropsWithChildren<{ footer?: boolean }>) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col justify-around align-middle container mx-auto max-w-3xl p-4">
        {children}
      </div>

      {footer ? (
        <div className="bg-white border-t border-gray-500">
          <div className="container max-w-3xl mx-auto   grid grid-cols-5 divide-x divide-gray-500 text-center py-2">
            <Link href="/">
              <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
                Home
              </h3>
            </Link>
            <Link href="/projects">
              <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
                Projects
              </h3>
            </Link>
            <Link href="/blog">
              <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
                Blog
              </h3>
            </Link>
            <Link href="/contact">
              <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
                Contact
              </h3>
            </Link>
            <Link href="/resume">
              <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
                Resume
              </h3>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
