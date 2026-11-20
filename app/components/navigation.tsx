"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/app/data/portfolio";
import { selectActiveSection } from "@/app/lib/navigation-state";
import { Icon } from "./ui-icon";

const links = [
  ["projects", "Work"],
  ["about", "About"],
  ["skills", "Skills"],
  ["contact", "Contact"],
] as const;
const sectionIds = ["top", "projects", "about", "skills", "resume", "contact"];
const desktopQuery = "(min-width: 901px)";

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="#top"
      className="wordmark"
      aria-label="Jhakeem Moultrie, home"
      onClick={onClick}
    >
      <span className="monogram">
        j<span>m</span>
        <i>.</i>
      </span>
      <span className="wordmark-name">
        Jhakeem Moultrie<span>SOFTWARE ENGINEERING</span>
      </span>
    </a>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const headerHeight = header.current?.getBoundingClientRect().height ?? 91;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`,
      );
      const positions = sectionIds.flatMap((id) => {
        const section = document.getElementById(id);
        return section
          ? [{ id, top: section.getBoundingClientRect().top }]
          : [];
      });
      setActive(
        selectActiveSection(
          positions,
          headerHeight + 24,
          window.scrollY > 0 &&
            window.scrollY + window.innerHeight >=
              document.documentElement.scrollHeight - 2,
        ),
      );
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(schedule);
    if (header.current) resize.observe(header.current);
    const main = document.getElementById("main");
    if (main) resize.observe(main);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.documentElement.style.removeProperty("--header-height");
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const modal = dialog.current;
    if (!modal) return;
    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const media = window.matchMedia(desktopQuery);
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", resize);
    return () => {
      modal.close();
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      media.removeEventListener("change", resize);
    };
  }, [open]);

  function closeMenu(destination?: string) {
    // Native modal focus containment keeps the obscured page inert. On link
    // selection, put focus at the destination rather than back on the trigger.
    dialog.current?.close();
    setOpen(false);
    if (destination)
      window.requestAnimationFrame(() =>
        document.getElementById(destination)?.focus({ preventScroll: true }),
      );
    else menuButton.current?.focus({ preventScroll: true });
  }

  function navLinks(mobile: boolean) {
    return (
      <>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={active === id ? "location" : undefined}
            onClick={mobile ? () => closeMenu(id) : undefined}
          >
            {label}
          </a>
        ))}
        <a
          className="nav-resume"
          href={profile.resume}
          download="Jhakeem_Moultrie_Software_Engineer_Resume.pdf"
          aria-label="Download résumé: Jhakeem Moultrie (PDF)"
          onClick={mobile ? () => closeMenu() : undefined}
        >
          Résumé <Icon name="download" width="16" height="16" />
        </a>
      </>
    );
  }

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
      <header ref={header} className="site-header">
        <nav className="container navigation" aria-label="Main navigation">
          <Brand />
          <button
            ref={menuButton}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
            aria-label="Open navigation"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
          <div className="navigation-links">{navLinks(false)}</div>
        </nav>
      </header>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        className="mobile-navigation-dialog"
        aria-label="Navigation menu"
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClose={() => setOpen(false)}
      >
        <div className="mobile-dialog-inner">
          <div className="mobile-dialog-header">
            <Brand onClick={() => closeMenu("top")} />
            <button
              type="button"
              className="menu-toggle"
              aria-label="Close navigation"
              onClick={() => closeMenu()}
            >
              <Icon name="close" />
            </button>
          </div>
          <nav
            className="mobile-navigation-links"
            aria-label="Mobile navigation"
          >
            {navLinks(true)}
          </nav>
        </div>
      </dialog>
    </>
  );
}
