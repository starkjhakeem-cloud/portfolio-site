"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/app/data/portfolio";
import { Icon } from "./ui-icon";

export function CopyEmail() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus("idle"), 4500);
  }
  return (
    <div className="copy-email-wrap">
      <button
        type="button"
        onClick={copy}
        className="copy-email"
        aria-label="Copy email address"
      >
        <Icon
          name={status === "copied" ? "check" : "copy"}
          width="17"
          height="17"
        />
        <span>{status === "copied" ? "Copied!" : "Copy email"}</span>
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
