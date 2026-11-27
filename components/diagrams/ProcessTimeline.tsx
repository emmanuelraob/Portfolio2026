type Step = { label: string; tag?: "AI" | "By hand" };

const steps: Step[] = [
  { label: "Scoping with the PM" },
  { label: "Study design" },
  { label: "Recruitment" },
  { label: "25 sessions" },
  { label: "Evidence extraction", tag: "AI" },
  { label: "Validation", tag: "By hand" },
  { label: "Synthesis and delivery" },
];

const desc =
  "Seven-step process timeline: scoping with the PM, study design, recruitment, 25 sessions, AI-assisted evidence extraction, manual validation, then synthesis and delivery.";

export default function ProcessTimeline() {
  return (
    <ol role="img" aria-label={desc} className="relative grid gap-6 md:grid-cols-7 md:gap-3">
      <span aria-hidden className="absolute left-[5px] top-2 bottom-2 w-px bg-line md:inset-x-0 md:top-[5px] md:bottom-auto md:h-px md:w-auto" />
      {steps.map((s, i) => (
        <li key={s.label} className="relative pl-8 md:pl-0 md:pt-8">
          <span
            aria-hidden
            className={`absolute left-0 top-1.5 size-[11px] rounded-full md:top-0 ${
              s.tag === "AI" ? "bg-accent" : s.tag ? "bg-ink" : "border border-ink/40 bg-surface"
            }`}
          />
          <span className="block font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
          <span className="mt-1 block leading-snug">{s.label}</span>
          {s.tag && (
            <span
              className={`mt-2 inline-block rounded-full px-2 py-0.5 text-xs ${
                s.tag === "AI" ? "bg-accent-soft text-accent" : "bg-ink text-surface"
              }`}
            >
              {s.tag}
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
