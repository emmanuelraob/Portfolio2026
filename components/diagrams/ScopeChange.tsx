const rows = [
  {
    k: "Model",
    before: "Virtual-only service for private-school families",
    after: "Partnering directly with schools, so parents meet the platform through an institution they already trust",
  },
  { k: "User profiles", before: "Original profiles", after: "Redefined" },
  { k: "Sessions", before: "Virtual only", after: "In-person sessions added" },
  { k: "Onboarding", before: "Original flow", after: "Simplified" },
];

const desc =
  "Scope change before and after the research. Before: a virtual-only service for private-school families. After: partnerships with schools so parents meet the platform through an institution they already trust, redefined user profiles, in-person sessions added, and simpler onboarding.";

export default function ScopeChange() {
  return (
    <div role="img" aria-label={desc}>
      <div className="hidden grid-cols-[11rem_1fr_1fr] gap-6 pb-4 text-sm md:grid">
        <span />
        <span className="text-muted">Before research</span>
        <span className="text-accent">After research</span>
      </div>
      <dl className="border-t border-line">
        {rows.map((r) => (
          <div key={r.k} className="grid gap-2 border-b border-line py-5 md:grid-cols-[11rem_1fr_1fr] md:gap-6">
            <dt className="text-sm text-muted">{r.k}</dt>
            <dd className="text-muted line-through decoration-muted/50">
              <span className="sr-only">Before: </span>
              {r.before}
            </dd>
            <dd className="font-medium">
              <span className="mr-2 text-accent md:hidden" aria-hidden>→</span>
              <span className="sr-only">After: </span>
              {r.after}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
