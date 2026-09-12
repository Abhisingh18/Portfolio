"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through a short list of words.
 *
 * Swaps whole words rather than typing them out character by character: it
 * reads as considered instead of gimmicky, and it never reflows the line.
 */
export function FocusRotator({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (words.length < 2) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 380);
    }, 3200);

    return () => clearInterval(cycle);
  }, [words.length]);

  return (
    <p className="mt-2 font-serif text-2xl italic text-fg md:text-3xl">
      <span
        className={`inline-block transition-[opacity,transform] duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-1.5 opacity-0"
        }`}
      >
        {words[index]}
      </span>
    </p>
  );
}
