// Recreated and translated from the 2tor team's persona boards (synthesis artifacts).

const personas = [
  {
    initial: "L",
    name: "Lucía",
    side: "Parent",
    role: "Working mother, 45, with two children in school",
    quote:
      "I'm looking for someone who doesn't just know the subject, but truly connects with my child. This shouldn't be one more source of stress for us.",
    rows: [
      { k: "Goal", v: "Less family stress around exams, and a child who understands on their own." },
      { k: "Frustration", v: "No time to sit down and teach after work, and past tutors who never made her child comfortable." },
      { k: "Trusts", v: "Recommendations in parents' WhatsApp groups, public-university tutors and signs of patience." },
    ],
  },
  {
    initial: "C",
    name: "Carlos",
    side: "Tutor",
    role: "Advanced university student, 20 to 27, tutoring complex subjects",
    quote:
      "My biggest satisfaction is seeing the student understand, but I need fair pay and tools that take the logistics off me so I can focus on teaching.",
    rows: [
      { k: "Goal", v: "Fair, predictable income without hurting his own grades." },
      { k: "Frustration", v: "Invisible, unpaid time: preparing lessons and answering questions between sessions." },
      { k: "Wants", v: "A reputation of trust that keeps a steady flow of students." },
    ],
  },
];

export default function Personas() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {personas.map((p) => (
        <section
          key={p.name}
          aria-label={`Persona: ${p.name}, ${p.side.toLowerCase()}`}
          className="rounded-sm bg-surface p-6 ring-1 ring-inset ring-line md:p-8"
        >
          <p className="text-xs text-accent">{p.side} persona</p>
          <div className="mt-5 flex items-center gap-4">
            <span
              aria-hidden
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-lg font-medium text-accent"
            >
              {p.initial}
            </span>
            <div>
              <p className="text-lg font-medium leading-tight">{p.name}</p>
              <p className="text-sm leading-snug text-muted">{p.role}</p>
            </div>
          </div>
          <blockquote className="mt-6 text-lg leading-snug">“{p.quote}”</blockquote>
          <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
            {p.rows.map((r) => (
              <div key={r.k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
                <dt className="text-muted">{r.k}</dt>
                <dd className="leading-snug">{r.v}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  );
}
