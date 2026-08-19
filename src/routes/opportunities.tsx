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
      { property: "og:url", content: "https://phantom-secure-xyz.lovable.app/opportunities" },
      { property: "og:site_name", content: "Phantom Secure" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://phantom-secure-xyz.lovable.app/opportunities" }],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
