import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-24 text-sm text-muted md:px-10">
      <p>
        © {new Date().getFullYear()} {site.name}. Work samples are anonymized. Diagrams use generic labels or
        fictional data.
      </p>
    </footer>
  );
}
