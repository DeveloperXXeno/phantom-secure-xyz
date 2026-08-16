import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/service";

export const Route = createFileRoute("/our-service")({
  head: () => ({
    meta: [
      { title: 'Our Service — Phantom Secure' },
      { name: "description", content: 'Around the clock support, private offshore networks and hardened devices built for confidentiality.' },
      { property: "og:title", content: 'Our Service — Phantom Secure' },
      { property: "og:description", content: 'Around the clock support, private offshore networks and hardened devices built for confidentiality.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
