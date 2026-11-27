import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, nextProject, projects } from "@/content/projects";
import { bodies } from "@/content/work";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((p) => p.ready && bodies[p.slug]).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: { title: p.title, description: p.summary, images: ["opengraph-image"] },
    twitter: { card: "summary_large_image", title: p.title, description: p.summary, images: ["opengraph-image"] },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const load = bodies[slug];
  if (!project || !load) notFound();

  const { default: Body } = await load();
  const next = nextProject(slug);

  return (
    <article className="mx-auto w-full max-w-6xl px-6 md:px-10">
      <header className="pb-16 pt-10 md:pt-16">
        <Link href="/#work" className="text-sm text-muted hover:text-ink">
          ← All work
        </Link>
        <p className="mt-12 text-sm text-accent">{project.label}</p>
        <h1 className="mt-4 max-w-[20ch] text-title font-medium">{project.title}</h1>
        <p className="mt-6 max-w-[52ch] text-xl leading-relaxed text-muted md:text-2xl md:leading-snug">
          {project.summary}
        </p>
      </header>

      <section aria-label="Project facts" className="reveal border-t border-line">
        <dl className="grid md:grid-cols-2 md:gap-x-12">
          {project.facts.map((f) => (
            <div key={f.label} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4">
              <dt className="text-sm text-muted">{f.label}</dt>
              <dd className="text-[0.95rem] leading-snug">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="prose-case">
        <Body />
      </div>

      {next && (
        <nav aria-label="Next case study" className="mt-32 border-t border-line pt-8">
          <Link href={`/work/${next.slug}/`} className="group block">
            <span className="text-sm text-muted">Next case study</span>
            <span className="mt-2 block text-title font-medium transition-colors group-hover:text-accent">
              {next.title} →
            </span>
          </Link>
        </nav>
      )}
    </article>
  );
}
