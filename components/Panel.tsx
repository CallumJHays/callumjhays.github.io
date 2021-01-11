import { HTMLAttributes } from "react";

const Panel: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...divProps
}) => {
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
};

export default Panel;
