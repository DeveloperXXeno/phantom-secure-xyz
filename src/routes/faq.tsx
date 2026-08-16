import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: 'FAQ — Phantom Secure' },
      { name: "description", content: 'Answers to common questions about encrypted devices, keys, billing and support.' },
      { property: "og:title", content: 'FAQ — Phantom Secure' },
      { property: "og:description", content: 'Answers to common questions about encrypted devices, keys, billing and support.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
