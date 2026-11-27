import createMDX from "@next/mdx";

// On GitHub Pages a project repo is served from /<repo>. The deploy workflow
// sets NEXT_PUBLIC_BASE_PATH from actions/configure-pages, so the repo name
// never has to be hard-coded here. Locally it stays empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  turbopack: { root: import.meta.dirname },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
