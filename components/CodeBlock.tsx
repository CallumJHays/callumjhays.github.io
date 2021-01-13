// src/CodeBlock.js
import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

export default function CodeBlock({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  return (
    <div className="my-2 rounded overflow-hidden">
      <Highlight
        {...defaultProps}
        code={children}
        language={className.replace(/language-/, "") as Language}
      >
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
