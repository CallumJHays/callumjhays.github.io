export default function Button({
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<any> & { className?: string }) {
  return (
    <button
      className={`inline-block px-5 py-2 rounded transition bg-gray-200 hover:bg-green-500 hover:text-white disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
