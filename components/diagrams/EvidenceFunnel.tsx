const stages = [
  { value: "25", label: "Interviews", note: "30 to 60 minutes each" },
  { value: "~1,100", label: "Evidence points", note: "Extracted by an agentic workflow on Claude, tagged by segment and product" },
  { value: "By hand", label: "Manual review", note: "Extracted evidence checked against the sources" },
  { value: "6", label: "Key findings", note: "Synthesized in a custom tool" },
];
const steps = ["", "AI extraction", "Validation", "Synthesis"];

const desc =
  "Evidence funnel: 25 interviews became about 1,100 evidence points through AI-assisted extraction. All of it was reviewed by hand against the sources, then synthesized into 6 key findings.";

export default function EvidenceFunnel() {
  return (
    <div role="img" aria-label={desc} className="relative">
      <svg
        aria-hidden
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden h-full w-full md:block"
      >
        <polygon points="0,0 100,13 100,27 0,40" className="fill-night-2" />
      </svg>
      <ol className="relative grid gap-8 md:grid-cols-4 md:gap-0">
        {stages.map((s, i) => (
          <li key={s.label} className="md:flex md:min-h-[17rem] md:flex-col md:justify-center md:px-6 md:first:pl-8">
            <p className="mb-3 h-4 font-mono text-xs text-night-accent">
              {steps[i] && (
                <>
                  <span className="md:hidden">↓ </span>
                  {steps[i]}
                  <span className="hidden md:inline"> →</span>
                </>
              )}
            </p>
            <p className={`${s.value.length > 6 ? "text-3xl xl:text-4xl" : "text-4xl xl:text-5xl"} font-medium tracking-tight whitespace-nowrap text-night-ink`}>{s.value}</p>
            <p className="mt-2 font-medium">{s.label}</p>
            <p className="mt-1 max-w-[24ch] text-sm text-night-muted">{s.note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
