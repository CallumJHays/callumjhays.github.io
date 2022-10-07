// import StyledLink from "components/StyledLink";
import Link from "next/link";

function NavBar({side}: {side: "t" | "b"}) {
  const opposite = side === "t" ? "b" : "t";
  return (
    <div className={
        side == "t" ?
          "bg-white border-gray-500 mb-4 border-b" :
          "bg-white border-gray-500 mt-4 border-t"
      }>
      <div className="container max-w-3xl mx-auto grid grid-cols-4 divide-x divide-gray-500 text-center py-2">
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
  justify = "between",
}: React.PropsWithChildren<{
  navigation?: boolean;
  justify?: "between" | "around";
}>) {
  console.log({navigation})
  return (
    <div
      className= {
        justify === "between"
          ? "min-h-screen flex flex-col justify-between"
          : "min-h-screen flex flex-col justify-around"
      }
    >
      {navigation ? <NavBar side="t" /> : null}

      <div className="flex flex-col align-middle container mx-auto max-w-3xl p-4 justify-center">
        {children}
      </div>

      {navigation ? <NavBar side="b" /> : null}

    </div>
  );
}
