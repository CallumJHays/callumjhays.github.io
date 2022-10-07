

export default function Pill({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={
        "inline-block rounded-full px-3 py-1 text-xs mr-2 mb-2 border border-green-500 bg-white"
      }
    >
      {children}
    </div>
  );
}
