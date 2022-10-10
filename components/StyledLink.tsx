import Link from "next/link";
import LinkTextSpan from "components/LinkTextSpan";

export default function StyledLink({
  children,
  href,
  floatRight = false,
  className = "",
}: React.PropsWithChildren<{
  href: string;
  floatRight?: boolean;
  className?: string;
}>) {
  return (
    <Link href={href}>
      <span>
        <LinkTextSpan className={floatRight ? `float-right pr-3 ${className}` : className}>
          {children}
        </LinkTextSpan>
      </span>
    </Link>
  );
  null;
}
