import type { SVGProps } from "react";

const paths = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  northeast: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  down: (
    <>
      <path d="M12 4v16m-6-6 6 6 6-6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5" />
    </>
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  terminal: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="3" />
      <path d="m6 8 4 4-4 4m7 0h5" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.5c0-1 .1-1.4-.5-2 3-.3 6-1.5 6-6.5 0-1.4-.5-2.6-1.3-3.5.1-.4.6-1.8-.1-3.5 0 0-1.1-.4-3.6 1.3a12 12 0 0 0-6.5 0C6.5 1.9 5.4 2.3 5.4 2.3c-.7 1.7-.2 3.1-.1 3.5C4.5 6.7 4 7.9 4 9.3c0 5 3 6.2 6 6.5-.5.5-.6 1.1-.6 2v3.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  copy: (
    <>
      <rect x="8" y="8" width="13" height="13" rx="2" />
      <path d="M16 8V3H3v13h5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 7h16M4 17h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H5v20h14V7l-5-5Zm0 0v5h5M8 12h8m-8 4h6" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;
export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
