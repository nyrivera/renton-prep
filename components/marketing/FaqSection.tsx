"use client";

import Link from "next/link";
import { type KeyboardEvent, useCallback, useId, useState } from "react";

import { FAQ_GROUPS, FAQ_SIDEBAR } from "@/components/marketing/faq-content";
import { site } from "@/lib/site";

function Chevron() {
  return (
    <svg
      className="faq-chevron"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function FaqSection() {
  const uid = useId();
  /** Only one panel open at a time; start collapsed so the list stays short. */
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const scrollToFaq = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setOpenId(id);
    requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, []);

  const onHeaderKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      const key = e.key;
      if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(key)) return;

      const headers = Array.from(
        document.querySelectorAll<HTMLButtonElement>(".faq-group-header"),
      );
      const currentIndex = headers.indexOf(e.currentTarget);
      if (currentIndex < 0) return;

      e.preventDefault();
      if (key === "Home") {
        headers[0]?.focus();
        return;
      }
      if (key === "End") {
        headers[headers.length - 1]?.focus();
        return;
      }

      const direction = key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + headers.length) % headers.length;
      headers[nextIndex]?.focus();
    },
    [],
  );

  return (
    <section
      className="section section--alt"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="section-intro section-intro--center">
          <span className="eyebrow eyebrow--muted">Common Questions</span>
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p>
            Use the menu to jump to a question. Only one answer is open at a
            time so the list stays easy to scan.
          </p>
        </div>

        <div className="faq-layout">
          <div className="faq-toolbar">
            <label className="faq-jump-label" htmlFor="faq-jump-select">
              Jump to a question
            </label>
            <select
              id="faq-jump-select"
              className="faq-jump-select"
              aria-label="Jump to a question"
              value={openId ?? ""}
              onChange={(e) => {
                const id = e.target.value;
                if (id && FAQ_SIDEBAR.some((item) => item.id === id)) {
                  scrollToFaq(id);
                }
              }}
            >
              <option value="">Choose a question…</option>
              {FAQ_SIDEBAR.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="faq-groups" id="faqList">
            {FAQ_GROUPS.map((group) => {
              const isOpen = openId === group.id;
              const btnId = `${uid}-btn-${group.id}`;
              const panelId = `${uid}-panel-${group.id}`;
              return (
                <div
                  key={group.id}
                  id={group.id}
                  data-cat={group.cats.join(" ")}
                  className={`faq-group${isOpen ? " open" : ""}`}
                >
                  <button
                    id={btnId}
                    type="button"
                    className="faq-group-header"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(group.id)}
                    onKeyDown={onHeaderKeyDown}
                  >
                    <span className="faq-question">{group.title}</span>
                    <Chevron />
                  </button>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    aria-hidden={!isOpen}
                    className="faq-body"
                  >
                    <div className="faq-body-inner">{group.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="faq-followup">
          <p className="faq-followup-copy">
            Still have a question we haven&apos;t answered?
          </p>
          <Link href={site.urls.contact} className="btn btn-primary">
            Request Information
          </Link>
        </div>
      </div>
    </section>
  );
}
