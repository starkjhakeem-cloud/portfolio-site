"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/app/data/portfolio";
import { Icon } from "./ui-icon";

const links = [
  ["projects", "Work"],
  ["about", "About"],
  ["skills", "Skills"],
  ["contact", "Contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef<HTMLButtonElement>(null);
  const navigation = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    for (const [id] of links) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navigation.current?.contains(event.target)
      )
        setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", resize);
    };
  }, [open]);

  return (
    <>
      <noscript>
        <nav className="no-script-navigation" aria-label="Section navigation">
          {links.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
      </noscript>
      <header className="site-header">
        <nav
          ref={navigation}
          className="container navigation"
          aria-label="Main navigation"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setOpen(false);
          }}
        >
          <a
            href="#top"
            className="wordmark"
            aria-label="Jhakeem Moultrie, home"
            onClick={() => setOpen(false)}
          >
            <span className="monogram">
              j<span>m</span>
              <i>.</i>
            </span>
            <span className="wordmark-name">
              Jhakeem Moultrie<span>SOFTWARE ENGINEERING</span>
            </span>
          </a>
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="navigation-links"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
          <div
            id="navigation-links"
            className={`navigation-links ${open ? "is-open" : ""}`}
          >
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a className="nav-resume" href={profile.resume} download>
              Résumé <Icon name="download" width="15" height="15" />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
