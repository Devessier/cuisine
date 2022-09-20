import { basename } from "node:path";

export function getSlugFromFileUrl(url: string): string {
  return basename(url, ".md");
}
