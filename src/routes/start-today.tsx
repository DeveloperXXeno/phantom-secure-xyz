import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/secure";

export const Route = createFileRoute("/start-today")({
  head: () => ({
    meta: [
      { title: 'Start Today — Phantom Secure' },
      { name: "description", content: 'Secure your privacy today with a Phantom Secure encrypted communication package.' },
      { property: "og:title", content: 'Start Today — Phantom Secure' },
      { property: "og:description", content: 'Secure your privacy today with a Phantom Secure encrypted communication package.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
