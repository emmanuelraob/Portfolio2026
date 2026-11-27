import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const night = project.mode === "ai";
  const shell = night
    ? "night bg-night text-night-ink"
    : "bg-surface text-ink ring-1 ring-inset ring-line";
  const muted = night ? "text-night-muted" : "text-muted";
  const accent = night ? "text-night-accent" : "text-accent";

  const inner = (
    <>
      <p className={`text-sm ${accent}`}>{project.label}</p>
      <h3 className="mt-auto pt-16 text-2xl font-medium leading-tight tracking-tight md:text-[1.75rem]">
        {project.title}
      </h3>
      <p className={`mt-3 max-w-[40ch] ${muted}`}>{project.card}</p>
      <p className={`mt-8 text-sm ${project.ready ? accent : muted}`} aria-hidden={project.ready}>
        {project.ready ? (
          <span className="inline-block transition-transform group-hover:translate-x-1">Read case study →</span>
        ) : (
          "Case study in progress"
        )}
      </p>
    </>
  );

  const base = `group reveal flex min-h-[22rem] flex-col rounded-sm p-8 md:p-10 ${shell}`;

  return project.ready ? (
    <Link href={`/work/${project.slug}/`} className={`${base} transition-colors hover:ring-ink/30`}>
      {inner}
    </Link>
  ) : (
    <article className={base}>{inner}</article>
  );
}
