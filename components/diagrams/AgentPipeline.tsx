const stages = [
  { name: "Shared Drive", note: "Interviews, notes and recordings" },
  { name: "Auto-classify", note: "By product, project and persona, from folder and naming" },
  { name: "AI extraction", note: "Behaviors, quotes and product context" },
  { name: "Summarize", note: "Keeps only what matters" },
  { name: "6 product agents", note: "3 to 15 personas each", agents: true },
  { name: "PMs and designers ask", note: "Questions answered in a persona's voice" },
];

const desc =
  "Pipeline: research materials go into a shared Drive, are classified automatically, AI extracts behaviors and quotes, a summarization step keeps what matters, and the output feeds 6 product agents with 3 to 15 personas each. PMs and designers ask them questions. Agent responses are reviewed by hand against the research data.";

export default function AgentPipeline() {
  return (
    <div role="img" aria-label={desc}>
      <ol className="grid gap-6 lg:grid-cols-6 lg:gap-0">
        {stages.map((s, i) => (
          <li key={s.name} className="relative lg:pr-5">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-night-accent">{String(i + 1).padStart(2, "0")}</span>
              {i < stages.length - 1 && (
                <span aria-hidden className="hidden h-px flex-1 bg-night-line lg:block" />
              )}
            </div>
            <p className="mt-3 font-medium leading-snug">{s.name}</p>
            <p className="mt-1 text-sm leading-snug text-night-muted">{s.note}</p>
            {s.agents && (
              <div aria-hidden className="mt-4 grid w-fit grid-cols-3 gap-1.5">
                {Array.from({ length: 6 }).map((_, k) => (
                  <span key={k} className="size-4 rounded-[3px] bg-night-accent/80" />
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-10 flex items-start gap-3 border-t border-night-line pt-5 text-sm text-night-muted">
        <span aria-hidden className="font-mono text-night-accent">↺</span>
        <span>
          <span className="text-night-ink">Manual review.</span> I check agent responses against the real research
          data to keep them accurate.
        </span>
      </p>
    </div>
  );
}
