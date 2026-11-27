const stages = [
  { value: "18", name: "Interviews", note: "In-depth, with parents and tutors" },
  { value: "2", name: "Personas", note: "A parent and a tutor, plus JTBD affinity maps, journey maps and value proposition canvases" },
  { value: "2", name: "Prototype flows", note: "Parent and tutor, from wireframes to high-fidelity interactive prototypes" },
  { value: "30", name: "Usability participants", note: "15 per round, across 2 rounds of testing" },
];
const phases = ["Discovery", "Synthesis", "Design", "Testing"];

const desc =
  "Research process in four phases: discovery with 18 in-depth interviews with parents and tutors; synthesis into 2 personas, affinity maps, journey maps and value proposition canvases; design of parent and tutor prototype flows; and usability testing with 30 participants, 15 in each of 2 rounds, looping back into the prototypes.";

export default function ResearchProcess() {
  return (
    <div role="img" aria-label={desc}>
      <ol className="grid gap-8 md:grid-cols-4 md:gap-6">
        {stages.map((s, i) => (
          <li key={s.name} className="md:border-l md:border-line md:pl-5 md:first:border-l-0 md:first:pl-0">
            <p className="text-sm text-accent">{phases[i]}</p>
            <p className="mt-4 text-5xl font-medium tracking-tight">{s.value}</p>
            <p className="mt-2 font-medium">{s.name}</p>
            <p className="mt-1 text-sm leading-snug text-muted">{s.note}</p>
          </li>
        ))}
      </ol>
      <div aria-hidden className="mt-8 hidden grid-cols-4 gap-6 md:grid">
        <div className="col-span-2 col-start-3 flex items-center gap-3 text-sm text-muted">
          <span className="h-px flex-1 bg-ink/30" />
          <span className="whitespace-nowrap">2 iterations: test, then refine the prototypes</span>
          <span className="font-mono text-accent">↺</span>
        </div>
      </div>
      <p aria-hidden className="mt-8 text-sm text-muted md:hidden">
        <span className="font-mono text-accent">↺</span> 2 iterations: test, then refine the prototypes
      </p>
    </div>
  );
}
