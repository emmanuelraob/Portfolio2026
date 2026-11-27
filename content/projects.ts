// Project registry. Copy comes from content/case-studies.md (source of truth).
// Each project's long-form body lives in content/work/<slug>.mdx.

export type Mode = "research" | "ai";

export type Project = {
  slug: string;
  title: string;
  card: string; // one line for the home card
  summary: string; // one line at the top of the case study
  mode: Mode; // research = light card, ai = dark card
  label: string;
  facts: { label: string; value: string }[];
  ready: boolean; // false until the case study page is built
};

export const projects: Project[] = [
  {
    slug: "developer-platform",
    title: "Where to invest in a developer platform",
    card: "25 interviews across 4 products to guide next year's investment.",
    summary:
      "A 6-week study of 4 developer products that gave leadership a clear map of what to grow, fix and scale back.",
    mode: "research",
    label: "Mixed-methods research",
    facts: [
      { label: "Company", value: "Enterprise B2B SaaS company (confidential)" },
      { label: "My role", value: "Lead and only UX Researcher, end to end" },
      { label: "Timeline", value: "6 weeks, 2026" },
      {
        label: "Methods",
        value:
          "Semi-structured interviews, segment-specific scripts, AI-assisted evidence extraction, thematic synthesis",
      },
      {
        label: "Tools",
        value:
          "Salesforce, PlaybookUX, email, Claude (custom agentic workflow), custom synthesis tool (Claude + VS Code)",
      },
      {
        label: "Participants",
        value:
          "25 developers: about 10 customers, 10 internal developers building for customers, 5 external developers",
      },
    ],
    ready: true,
  },
  {
    slug: "persona-agents",
    title: "Research that answers back",
    card: "An AI platform that turns research into persona agents for 6 products.",
    summary:
      "An AI platform that turns a team's research into persona agents anyone in the company can ask.",
    mode: "ai",
    label: "AI research platform",
    facts: [],
    ready: false,
  },
  {
    slug: "2tor",
    title: "2tor: trust in a tutoring marketplace",
    card: "End-to-end HCD for a two-sided marketplace now in development.",
    summary:
      "How parents decide whom to trust with their children's learning, and how that shaped a two-sided marketplace now in development.",
    mode: "research",
    label: "Human-centered design",
    facts: [],
    ready: false,
  },
  {
    slug: "emotion-analysis",
    title: "What users don't say",
    card: "A pipeline that flags where voice tone and words disagree in interviews.",
    summary:
      "A Python pipeline that flags the moments in an interview where a participant's voice and words disagree.",
    mode: "ai",
    label: "Python pipeline",
    facts: [],
    ready: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const nextProject = (slug: string) => {
  const ready = projects.filter((p) => p.ready);
  const i = ready.findIndex((p) => p.slug === slug);
  return ready.length > 1 ? ready[(i + 1) % ready.length] : undefined;
};
