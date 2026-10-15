"use client";
import { useEffect, useRef } from "react";
import { PixelIcon } from "./pixel-icon";
const destinations = [
  ["Selected projects", "/#work"],
  ["Experience", "/#experience"],
  ["Research", "/#research"],
  ["About & contact", "/#contact"],
  ["TraceLab case study", "/work/tracelab"],
  ["Recall case study", "/work/recall"],
  ["Resume", "/resume"],
];
export function CommandMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else dialog.current?.showModal();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <button
        className="jump-button"
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
      >
        <PixelIcon name="code" />
        <span>Jump to</span>
        <kbd>⌘/Ctrl K</kbd>
      </button>
      <dialog
        ref={dialog}
        className="command-dialog"
        aria-labelledby="jump-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div className="command-heading">
          <h2 id="jump-title">Where would you like to go?</h2>
          <button
            onClick={() => dialog.current?.close()}
            aria-label="Close navigation menu"
          >
            Esc
          </button>
        </div>
        <nav aria-label="Quick navigation">
          {destinations.map(([name, href], i) => (
            <a key={href} href={href} onClick={() => dialog.current?.close()}>
              <span>
                <small>0{i + 1}</small>
                {name}
              </span>
              <PixelIcon name="arrow" />
            </a>
          ))}
        </nav>
      </dialog>
    </>
  );
}
