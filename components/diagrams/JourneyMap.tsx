// Recreated and translated from the 2tor team's journey maps (synthesis artifacts).
// Participant quotes from the original "Thoughts" row are left out on purpose.

type Emotion = "Happy" | "Interested" | "Annoyed" | "Frustrated";
type Stage = { name: string; emotion: Emotion; pain: string; opportunity: string };

const level: Record<Emotion, number> = { Happy: 0, Interested: 1, Annoyed: 2, Frustrated: 3 };

export const lucia: Stage[] = [
  {
    name: "Discovering the need",
    emotion: "Frustrated",
    pain: "A heavy workload that overlaps with her child's study time, and no teaching training.",
    opportunity: "A quick guided diagnostic, so she can hand off the problem without finding the gaps herself.",
  },
  {
    name: "Finding and choosing a tutor",
    emotion: "Annoyed",
    pain: "The hit to the family budget, and the fear of paying for something generic or group-based.",
    opportunity: "Transparent packages and a first alignment session that shows value before a long commitment.",
  },
  {
    name: "Tutoring sessions: the chemistry test",
    emotion: "Frustrated",
    pain: "No chemistry with the tutor, no visual or dynamic methods, attention diluted in groups.",
    opportunity: "Tutors trained in soft skills and visual teaching, with one-on-one as the non-negotiable base.",
  },
  {
    name: "Results and follow-up",
    emotion: "Happy",
    pain: "No regular feedback, so she can't measure the return on her time and money.",
    opportunity: "A weekly or biweekly progress report by WhatsApp or email.",
  },
];

export const carlos: Stage[] = [
  {
    name: "Finding students",
    emotion: "Interested",
    pain: "An unstable number of students, and dependence on word of mouth.",
    opportunity: "Matching that connects demand with tutors, plus recurring plans for predictable income.",
  },
  {
    name: "Preparation and logistics",
    emotion: "Frustrated",
    pain: "Unpaid preparation time that clashes with his own university work.",
    opportunity: "Integrated tools to manage schedules and reuse study plans.",
  },
  {
    name: "Tutoring session",
    emotion: "Happy",
    pain: "Technical problems, or heavy recordings he has to store and send himself.",
    opportunity: "Automatic cloud recordings shared directly with the student.",
  },
  {
    name: "Questions between sessions",
    emotion: "Frustrated",
    pain: "Students expecting instant answers, and no clear line between a favor and extra work.",
    opportunity: "Formal async channels with set hours, or paid express help.",
  },
  {
    name: "Payment and feedback",
    emotion: "Happy",
    pain: "Awkward manual charging, and no visible record of his good work for new clients.",
    opportunity: "Upfront payments and verified public profiles with reviews.",
  },
];

export default function JourneyMap({ who, stages }: { who: string; stages: Stage[] }) {
  const n = stages.length;
  const x = (i: number) => ((i + 0.5) / n) * 100;
  const y = (e: Emotion) => 8 + level[e] * 16;
  const points = stages.map((s, i) => `${x(i)},${y(s.emotion)}`).join(" ");
  const desc = `Journey map for ${who}, ${n} stages: ${stages.map((s) => `${s.name} (${s.emotion.toLowerCase()})`).join(", ")}.`;

  return (
    <div role="img" aria-label={desc}>
      {/* Desktop: columns with an emotion curve */}
      <div className="hidden md:block">
        <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
          {stages.map((s, i) => (
            <p key={s.name} className="text-sm font-medium leading-snug">
              <span className="block font-mono text-xs font-normal text-muted">{String(i + 1).padStart(2, "0")}</span>
              {s.name}
            </p>
          ))}
        </div>
        <div className="relative my-5 h-28 border-y border-line">
          <svg viewBox="0 0 100 64" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
            <polyline points={points} fill="none" className="stroke-ink" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
          {stages.map((s, i) => (
            <span
              key={s.name}
              className={`absolute size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-4 ring-surface ${
                s.emotion === "Happy" || s.emotion === "Interested" ? "bg-accent" : "bg-ink"
              }`}
              style={{ left: `${x(i)}%`, top: `${(y(s.emotion) / 64) * 100}%` }}
            >
              <span className="absolute left-full top-1/2 ml-2.5 -translate-y-1/2 whitespace-nowrap rounded-sm bg-surface px-1 text-xs text-muted">
                {s.emotion}
              </span>
            </span>
          ))}
        </div>
        <div className="grid gap-4 text-sm leading-snug" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
          {stages.map((s) => (
            <div key={s.name}>
              <p className="text-xs text-muted">Pain point</p>
              <p className="mt-1">{s.pain}</p>
              <p className="mt-4 text-xs text-accent">Opportunity</p>
              <p className="mt-1">{s.opportunity}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: stacked stages */}
      <ol className="space-y-5 md:hidden">
        {stages.map((s, i) => (
          <li key={s.name} className="border-t border-line pt-4 text-sm leading-snug">
            <p className="flex items-baseline justify-between gap-3">
              <span className="font-medium">
                <span className="mr-2 font-mono text-xs font-normal text-muted">{String(i + 1).padStart(2, "0")}</span>
                {s.name}
              </span>
              <span className={`shrink-0 text-xs ${s.emotion === "Happy" || s.emotion === "Interested" ? "text-accent" : "text-muted"}`}>
                {s.emotion}
              </span>
            </p>
            <p className="mt-2 text-muted">{s.pain}</p>
            <p className="mt-2"><span className="text-accent">Opportunity: </span>{s.opportunity}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
