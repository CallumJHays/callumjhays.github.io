import Link from "next/link";
import LinkTextSpan from "components/LinkTextSpan";

export default function StyledLink({ children, href, floatRight = false }) {
  return (
    <Link href={href}>
      <LinkTextSpan className={floatRight ? "float-right pr-3" : null}>
        {children}
      </LinkTextSpan>
    </Link>
  );
}
