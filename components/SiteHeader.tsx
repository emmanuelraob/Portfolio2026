import Link from "next/link";
import { asset, site } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10">
      <Link href="/" className="text-[0.95rem] font-medium tracking-tight">
        {site.name}
      </Link>
      <nav aria-label="Main">
        <ul className="flex items-center gap-6 text-[0.95rem] text-muted">
          <li>
            <Link href="/#work" className="hover:text-ink">
              Work
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-ink">
              Contact
            </Link>
          </li>
          {site.cv && (
            <li>
              <a href={asset(site.cv)} download className="hover:text-ink">
                CV
              </a>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
