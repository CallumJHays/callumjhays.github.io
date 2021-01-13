import Link from "next/link";
import LinkTextSpan from "components/LinkTextSpan";

export default function StyledLink({
  children,
  href,
  floatRight = false,
}: React.PropsWithChildren<{ href: string; floatRight?: boolean }>) {
  return (
    <Link href={href}>
      <span>
        <LinkTextSpan className={floatRight ? "float-right pr-3" : undefined}>
          {children}
        </LinkTextSpan>
      </span>
    </Link>
  );
  null;
}
