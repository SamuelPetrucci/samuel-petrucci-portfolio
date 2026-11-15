"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Cloud infrastructure",
  "AI automation",
  "Ops dashboards",
  "Client websites",
  "Data pipelines",
];

export function TypeLine() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = deleting ? 28 : 55;
    const pause = deleting && text === "" ? 280 : !deleting && text === current ? 1400 : speed;

    const id = window.setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
        return;
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, pause);

    return () => window.clearTimeout(id);
  }, [text, deleting, index]);

  return (
    <span className="inline-flex items-baseline text-signal">
      <span>{text || "\u00A0"}</span>
      <span className="caret" aria-hidden />
    </span>
  );
}
