import { HTMLAttributes } from "react";

export default function Panel({
  children,
  className,
  ...divProps
}: React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      {...divProps}
      className={`border-b-4 border-r-2 rounded border-gray-400 p-2 pb-1 bg-white ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
