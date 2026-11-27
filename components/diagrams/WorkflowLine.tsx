const stages = [
  { name: "Code", tool: "IDE" },
  { name: "Version control", tool: "Git" },
  { name: "Build & test", tool: "CI/CD" },
  { name: "Deploy & run", tool: "Hosting", anchor: true },
];

const desc =
  "One developer workflow with four stages in order: Code (IDE), Version control (Git), Build and test (CI/CD), Deploy and run (Hosting). Each of the four products sits at one stage. Hosting is the anchor every team ends up using.";

export default function WorkflowLine() {
  return (
    <ol role="img" aria-label={desc} className="relative grid gap-6 md:grid-cols-4 md:gap-4">
      <span aria-hidden className="absolute left-[7px] top-3 bottom-3 w-0.5 bg-ink md:inset-x-[7px] md:top-[7px] md:bottom-auto md:h-0.5 md:w-auto" />
      {stages.map((s) => (
        <li key={s.name} className="relative pl-10 md:pl-0 md:pt-10">
          <span
            aria-hidden
            className={`absolute left-0 top-1 size-4 rounded-full border-2 border-ink md:top-0 ${
              s.anchor ? "bg-accent border-accent" : "bg-surface"
            }`}
          />
          <span className="block text-lg font-medium leading-tight md:text-xl">{s.name}</span>
          <span className="mt-1 block text-muted">{s.tool}</span>
          {s.anchor && (
            <span className="mt-3 inline-block rounded-full bg-accent-soft px-2 py-0.5 text-xs text-accent">
              Anchor
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
