import type { ComponentType } from "react";

// One MDX body per case study. Add a line here when a new page is ready.
export const bodies: Record<string, () => Promise<{ default: ComponentType }>> = {
  "developer-platform": () => import("./developer-platform.mdx"),
  "persona-agents": () => import("./persona-agents.mdx"),
};
