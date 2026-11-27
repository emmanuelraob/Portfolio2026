import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";
import { asset, site } from "@/lib/site";

const contacts = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "LinkedIn", value: "emmanuel-ramírez-design", href: site.linkedin },
  { label: "GitHub", value: "emmanuelraob", href: site.github },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-20">
        <img
          src={asset("/avatar.jpg")}
          alt="Portrait of Emmanuel Ramírez"
          width={64}
          height={64}
          className="size-16 rounded-full object-cover grayscale"
        />
        <h1 className="mt-10 max-w-[19ch] text-display font-medium">
          <span className="block text-muted">{site.name}</span>
          {site.headline}
        </h1>
        <p className="mt-10 max-w-[62ch] text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
          {site.bio}
        </p>
      </section>

      <section id="work" aria-labelledby="work-title" className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 md:px-10">
        <h2 id="work-title" className="mb-8 text-sm text-muted">
          Selected work
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        aria-labelledby="contact-title"
        className="mx-auto w-full max-w-6xl scroll-mt-8 px-6 pt-32 md:px-10"
      >
        <div className="reveal grid gap-12 border-t border-line pt-10 md:grid-cols-[1fr_1.4fr]">
          <h2 id="contact-title" className="text-title font-medium">
            Contact
          </h2>
          <div>
            <dl className="divide-y divide-line border-y border-line">
              {contacts.map((c) => (
                <div key={c.label} className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                  <dt className="text-muted">{c.label}</dt>
                  <dd>
                    <a
                      href={c.href}
                      className="break-all underline decoration-line underline-offset-4 hover:decoration-accent"
                      {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {c.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            {site.cv && (
              <a
                href={asset(site.cv)}
                download
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-bg transition-colors hover:bg-accent"
              >
                Download CV (PDF)
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
