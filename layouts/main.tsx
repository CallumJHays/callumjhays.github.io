import StyledLink from "components/StyledLink";

export default function MainLayout({ children, footer = true }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex flex-col justify-around align-middle container mx-auto max-w-3xl p-4">
        {children}
      </div>
      {footer ? (
        <div className="bg-white border-t border-gray-500">
          <div className="container max-w-3xl mx-auto   grid grid-cols-5 divide-x divide-gray-500 text-center py-2">
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/projects">Projects</StyledLink>
            <StyledLink href="/blog">Blog</StyledLink>
            <StyledLink href="/contact">Contact</StyledLink>
            <StyledLink href="/resume">Resume</StyledLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
