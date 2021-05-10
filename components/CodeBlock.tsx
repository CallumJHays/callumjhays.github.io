import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

export default function CodeBlock({
  children,
  language,
  className,
}: {
  children: string;
  language: Language;
  className?: string;
}) {
  return (
    <div className={`rounded overflow-hidden ${className}`}>
      <Highlight {...defaultProps} code={children} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: "20px" }}>
            {tokens.map((line, i) =>
              i == tokens.length - 1 ? null : ( // the last line is always empty for some reason
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            )}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
