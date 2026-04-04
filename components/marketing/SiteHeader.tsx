"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { MarketingLink } from "@/components/marketing/MarketingLink";
import { site } from "@/lib/site";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/about", label: "Our story" },
  { href: "/#mission", label: "Mission" },
  { href: "/#research", label: "Research" },
  { href: "/#genesis", label: "The Genesis Project" },
  { href: "/#next-steps", label: "Admissions" },
  { href: "/#community", label: "Community" },
  { href: "/#faq", label: "FAQ" },
];

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled])';

/** True when this nav href matches the current path and (if present) URL hash. */
function navItemIsCurrent(
  pathname: string,
  hashWithoutPound: string,
  href: string,
): boolean {
  const hashIdx = href.indexOf("#");
  if (hashIdx !== -1) {
    const pathPart = href.slice(0, hashIdx) || "/";
    const hashPart = href.slice(hashIdx + 1);
    return pathname === pathPart && hashWithoutPound === hashPart;
  }
  if (href === "/about") {
    return pathname === "/about" || pathname.startsWith("/about/");
  }
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [hashWithoutPound, setHashWithoutPound] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const panelId = `${menuId}-mobile-nav`;
  const menuRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const prevMenuOpen = useRef(false);

  const getFocusables = useCallback((): HTMLElement[] => {
    const menu = menuRef.current;
    if (!menu) return [];
    return Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
  }, []);

  useEffect(() => {
    const readHash = () =>
      setHashWithoutPound(
        typeof window !== "undefined" ? window.location.hash.slice(1) : "",
      );
    readHash();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, [pathname]);

  useEffect(() => {
    if (prevMenuOpen.current && !menuOpen) {
      hamburgerRef.current?.focus();
    }
    prevMenuOpen.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (e.key !== "Tab") return;

      const list = getFocusables();
      if (list.length === 0) return;

      const active = document.activeElement as HTMLElement | null;
      const ix = active ? list.indexOf(active) : -1;

      if (e.shiftKey) {
        if (ix <= 0) {
          e.preventDefault();
          list[list.length - 1]?.focus();
        }
        return;
      }

      if (ix === -1 || ix === list.length - 1) {
        e.preventDefault();
        list[0]?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, getFocusables]);

  useEffect(() => {
    if (!menuOpen) return;

    const id = requestAnimationFrame(() => {
      const list = getFocusables();
      list[0]?.focus();
    });

    return () => cancelAnimationFrame(id);
  }, [menuOpen, getFocusables]);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const menu = menuRef.current;
      const btn = hamburgerRef.current;
      if (
        menu &&
        btn &&
        !menu.contains(target) &&
        !btn.contains(target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  return (
    <header className="site-header" id="top">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="logo" aria-label="Renton Prep home">
            <Image
              src="/logo.png"
              alt="Renton Prep Christian School"
              width={1125}
              height={509}
              className="logo-img"
              priority
            />
          </Link>

          <nav className="nav" aria-label="Primary navigation">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  navItemIsCurrent(pathname, hashWithoutPound, item.href)
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link href={site.urls.contact} className="btn btn-primary">
              Request Information
            </Link>
          </div>

          <button
            ref={hamburgerRef}
            id={`${menuId}-hamburger`}
            type="button"
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls={panelId}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        ref={menuRef}
        id={panelId}
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <MarketingLink
          href={site.urls.contact}
          className="btn btn-primary mobile-menu-primary-cta"
          onClick={() => setMenuOpen(false)}
        >
          Request Information
        </MarketingLink>
        <p className="mobile-menu-primary-note">
          No commitment. Takes about 2 minutes.
        </p>
        {NAV_LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              navItemIsCurrent(pathname, hashWithoutPound, item.href)
                ? "page"
                : undefined
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
