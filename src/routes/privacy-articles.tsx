import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/why";

export const Route = createFileRoute("/privacy-articles")({
  head: () => ({
    meta: [
      { title: 'Privacy Articles — Phantom Secure' },
      { name: "description", content: 'News and articles on digital privacy, surveillance and secure communications.' },
      { property: "og:title", content: 'Privacy Articles — Phantom Secure' },
      { property: "og:description", content: 'News and articles on digital privacy, surveillance and secure communications.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
