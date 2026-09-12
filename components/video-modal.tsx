"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Project } from "@/content/site";

export function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  // Portals need a DOM, so bail out during server rendering.
  if (!project || typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} demo video`}
      onClick={onClose}
      className="fixed inset-0 z-80 grid animate-rise place-items-center bg-ink-sunken/92 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl overflow-hidden rounded-card border border-line-strong bg-ink"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <p className="truncate text-sm text-fg">{project.title}</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="rounded-lg p-1.5 text-fg-muted transition-colors hover:bg-white/5 hover:text-fg"
          >
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        <video
          key={project.video}
          src={project.video}
          poster={project.poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="max-h-[76vh] w-full bg-black"
        />
      </div>
    </div>,
    document.body,
  );
}
