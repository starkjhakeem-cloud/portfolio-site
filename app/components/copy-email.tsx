"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/app/data/portfolio";
import { copyText } from "@/app/lib/clipboard";
import { Icon } from "./ui-icon";

export function CopyEmail() {
  const [status, setStatus] = useState<
    "idle" | "copying" | "copied" | "failed"
  >("idle");
  const mounted = useRef(true);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);
  async function copy() {
    if (timeout.current) clearTimeout(timeout.current);
    setStatus("copying");
    const result = await copyText(profile.email, navigator.clipboard);
    if (!mounted.current) return;
    setStatus(result);
    timeout.current = setTimeout(() => setStatus("idle"), 4500);
  }
  return (
    <div className="copy-email-wrap">
      <button
        type="button"
        onClick={copy}
        className="copy-email"
        aria-label="Copy email address"
        aria-busy={status === "copying"}
        disabled={status === "copying"}
      >
        <Icon
          name={status === "copied" ? "check" : "copy"}
          width="17"
          height="17"
        />
        <span>
          {status === "copied"
            ? "Copied!"
            : status === "copying"
              ? "Copying…"
              : "Copy email"}
        </span>
      </button>
      <span className="copy-status" role="status">
        {status === "failed"
          ? "Please select the email address above to copy it, or use the email link."
          : status === "copied"
            ? "Email address copied."
            : ""}
      </span>
    </div>
  );
}
