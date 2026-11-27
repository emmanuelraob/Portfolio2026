// Fictional example. Not real research data, not a real product.

const persona = {
  name: "Dana",
  role: "Operations lead, mid-size company",
  product: "Product B",
  traits: [
    { k: "Goal", v: "Ship changes without pulling in the on-call team." },
    { k: "Frustration", v: "Settings spread across several screens." },
    { k: "Prefers", v: "Sensible defaults over many options." },
  ],
  quote: "If I need a manual to change it, I won't change it.",
};

const chat = [
  {
    from: "Designer",
    text: "We're testing a setup wizard that asks 8 questions before the first deploy. How would you react?",
  },
  {
    from: "Dana (agent)",
    text: "Eight questions before I see anything working feels long. I'd rather start from a default and adjust later. If you keep the wizard, let me skip it.",
  },
];

export default function PersonaChat() {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1.25fr]">
      <section
        aria-label="Fictional persona card"
        className="rounded-sm bg-surface p-6 ring-1 ring-inset ring-line md:p-8"
      >
        <p className="text-xs text-muted">Fictional persona, {persona.product}</p>
        <div className="mt-5 flex items-center gap-4">
          <span
            aria-hidden
            className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-lg font-medium text-accent"
          >
            D
          </span>
          <div>
            <p className="text-lg font-medium leading-tight">{persona.name}</p>
            <p className="text-sm text-muted">{persona.role}</p>
          </div>
        </div>
        <dl className="mt-6 divide-y divide-line border-y border-line text-sm">
          {persona.traits.map((t) => (
            <div key={t.k} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
              <dt className="text-muted">{t.k}</dt>
              <dd>{t.v}</dd>
            </div>
          ))}
        </dl>
        <blockquote className="mt-6 text-lg leading-snug">“{persona.quote}”</blockquote>
      </section>

      <section aria-label="Fictional chat with a persona agent" className="night rounded-sm bg-night p-6 text-night-ink md:p-8">
        <p className="font-mono text-xs text-night-muted">Answering as Dana, grounded in {persona.product} research</p>
        <ol className="mt-6 space-y-4">
          {chat.map((m) => {
            const agent = m.from.includes("agent");
            return (
              <li key={m.from} className={agent ? "pr-6" : "pl-10"}>
                <p className={`text-xs ${agent ? "text-night-accent" : "text-night-muted text-right"}`}>{m.from}</p>
                <p
                  className={`mt-1.5 rounded-md px-4 py-3 leading-snug ${
                    agent ? "bg-night-2 text-night-ink" : "bg-night-ink text-night"
                  }`}
                >
                  {m.text}
                </p>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
