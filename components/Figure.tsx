type Props = {
  children: React.ReactNode;
  caption: string;
  tone?: "light" | "night" | "bare";
  wide?: boolean;
};

/** Diagram frame. Light = research content, night = AI / code content. */
export default function Figure({ children, caption, tone = "light", wide = true }: Props) {
  const night = tone === "night";
  return (
    <figure className={`reveal my-14 ${wide ? "lg:-mr-[22%]" : ""}`}>
      {tone === "bare" ? (
        children
      ) : (
        <div
          className={`rounded-sm p-6 md:p-10 ${
            night ? "night bg-night text-night-ink" : "bg-surface text-ink ring-1 ring-inset ring-line"
          }`}
        >
          {children}
        </div>
      )}
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
