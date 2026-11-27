export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a file in /public with the GitHub Pages base path. */
export const asset = (path: string) => `${basePath}${path}`;

export const site = {
  name: "Emmanuel Ramírez",
  role: "UX Researcher",
  headline:
    "UX Researcher who turns user evidence into product decisions, and builds the AI tools to do it faster.",
  bio: "I'm a UX Researcher based in Costa Rica, working remotely with product teams in 12+ countries. I lead mixed-methods research end to end for enterprise B2B SaaS products, from planning and recruitment to the insights that shape investment decisions. My background in Industrial Design and a Master's in Computer Science (in progress) let me design studies and build the AI workflows that scale them.",
  description:
    "Emmanuel Ramírez, UX Researcher. Mixed-methods research end to end, and AI tools that make research faster.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://emmanuelraob.github.io",
  email: "emmanuelraob123@gmail.com",
  linkedin: "https://www.linkedin.com/in/emmanuel-ram%C3%ADrez-design/",
  github: "https://github.com/emmanuelraob",
  // TODO: CV download is off until an anonymized PDF (no employer name, no phone)
  // is added to public/. Then set: "/Emmanuel_Ramirez_Senior_UX_Researcher_CV.pdf"
  cv: null as string | null,
};
