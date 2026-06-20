"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeSnippetProps {
  code: string;
  filename?: string;
}

// Lightweight token highlighter — enough to read as engineered code, no deps.
const KEYWORDS =
  /\b(import|from|const|await|for|of|new|return|async|process|console)\b/g;
const STRINGS = /("[^"]*"|'[^']*'|`[^`]*`)/g;
const COMMENTS = /(\/\/[^\n]*)/g;
const NUMBERS = /\b(0x[0-9a-fA-F…]+|\d+\.?\d*)\b/g;

function highlight(line: string) {
  // Escape HTML first
  let html = line
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  html = html.replace(COMMENTS, '<span class="text-muted/70">$1</span>');
  html = html.replace(STRINGS, '<span style="color:#22D3EE">$1</span>');
  html = html.replace(KEYWORDS, '<span style="color:#818CF8">$1</span>');
  html = html.replace(NUMBERS, '<span style="color:#A5F3FC">$1</span>');
  return html;
}

export function CodeSnippet({ code, filename = "deploy.ts" }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-[#0c0d12]">
      <div className="flex items-center justify-between border-b border-line bg-surface/50 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="ml-2 font-mono text-xs text-muted">{filename}</span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-xs text-muted transition-colors hover:text-ink"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check className="size-3.5 text-cyan" /> Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 text-[0.82rem] leading-relaxed">
        <code className="font-mono text-ink/90">
          {code.split("\n").map((line, i) => (
            <div key={i} className="table-row">
              <span className="table-cell select-none pr-5 text-right text-muted/40">
                {i + 1}
              </span>
              <span
                className="table-cell"
                dangerouslySetInnerHTML={{ __html: highlight(line) || "&nbsp;" }}
              />
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
