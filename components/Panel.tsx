import { HTMLAttributes } from "react";

export default function Panel({
  children,
  className,
  ...divProps
}: React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...divProps}
      className={`border-b-4 border-r-2 border-l border-t rounded border-gray-300 pl-3 p-2 pb-2 bg-white ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
