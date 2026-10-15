import clsx from "clsx";

/** Splits text into letters that roll up to a duplicate on hover of the nearest `.roll-host`. */
export default function RollText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={clsx("roll", className)} aria-label={text}>
      {Array.from(text).map((c, i) => (
        <span key={i} data-c={c} aria-hidden style={{ ["--i" as string]: i }}>
          {c}
        </span>
      ))}
    </span>
  );
}
