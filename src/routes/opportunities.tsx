import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/opportunity";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: 'Opportunities — Phantom Secure' },
      { name: "description", content: 'Partner and reseller opportunities with the world’s most trusted encrypted communication service.' },
      { property: "og:title", content: 'Opportunities — Phantom Secure' },
      { property: "og:description", content: 'Partner and reseller opportunities with the world’s most trusted encrypted communication service.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
