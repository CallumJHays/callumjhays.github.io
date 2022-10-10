// import StyledLink from "components/StyledLink";
import Link from "next/link";

function NavBar({ side }: { side: "t" | "b" }) {
  const opposite = side === "t" ? "b" : "t";
  return (
    <div
      className={
        side == "t"
          ? "bg-white border-gray-500 mb-4 border-b"
          : "bg-white border-gray-500 mt-4 border-t"
      }
    >
      <div className="container max-w-3xl mx-auto grid grid-cols-4 divide-x divide-gray-500 text-center py-2">
        <Link href="/">
          <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
            Home
          </h3>
        </Link>
        <Link href="/projects">
          <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
            Personal Projects
          </h3>
        </Link>
        <Link href="/blog">
          <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
            Blog
          </h3>
        </Link>
        <Link href="/resume">
          <h3 className="py-2 hover:underline hover:text-green-500 cursor-pointer">
            Resume
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default function MainLayout({
  children,
  navigation = true,
  justifyInner = "start",
  justifyOuter = "between",
}: React.PropsWithChildren<{
  navigation?: boolean;
  justifyOuter?: "between" | "around";
  justifyInner?: "start" | "center";
}>) {
  return (
    <div
      className={
        justifyOuter === "between"
          ? "min-h-screen flex flex-col justify-between"
          : "min-h-screen flex flex-col justify-around"
      }
    >
      {navigation ? <NavBar side="t" /> : null}

      <div
        className={
          justifyInner === "start"
            ? "flex flex-grow flex-col align-middle container mx-auto max-w-3xl p-4 justify-start"
            : "flex flex-grow flex-col align-middle container mx-auto max-w-3xl p-4 justify-center"
        }
      >
        {children}
      </div>

      {navigation ? <NavBar side="b" /> : null}
    </div>
  );
}
