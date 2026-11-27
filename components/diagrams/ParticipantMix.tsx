const groups = [
  { label: "Customers", count: 10, note: "about 10" },
  { label: "Internal developers building for customers", count: 10, note: "10" },
  { label: "External developers", count: 5, note: "5" },
];

const desc =
  "Participant mix of 25 developers: about 10 customers, 10 internal developers building for customers, and 5 external developers. Each square is one participant.";

export default function ParticipantMix() {
  return (
    <div role="img" aria-label={desc}>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-5xl font-medium tracking-tight md:text-6xl">25</p>
        <p className="text-sm text-muted">1 square = 1 developer</p>
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-[10fr_10fr_5fr] sm:gap-4">
        {groups.map((g, gi) => (
          <div key={g.label}>
            <div className="grid grid-cols-5 gap-1.5" style={{ maxWidth: "14rem" }}>
              {Array.from({ length: g.count }).map((_, i) => (
                <span
                  key={i}
                  aria-hidden
                  className={`aspect-square rounded-[2px] ${
                    gi === 0 ? "bg-accent" : gi === 1 ? "bg-ink" : "bg-muted/50"
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-sm leading-snug">
              <span className="font-medium">{g.note}</span>
              <span className="block text-muted">{g.label}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
