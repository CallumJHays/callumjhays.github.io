import { HTMLAttributes } from "react";

export default function LinkTextSpan({
  children,
  className,
  ...spanProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      {...spanProps}
      className={`${className ?? ""} cursor-pointer underline text-green-500`}
    >
      {children}
    </span>
  );
}
