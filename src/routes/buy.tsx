import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/buy";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: 'Buy Now — Phantom Secure' },
      { name: "description", content: 'Order your Phantom Secure encrypted device and subscription package today.' },
      { property: "og:title", content: 'Buy Now — Phantom Secure' },
      { property: "og:description", content: 'Order your Phantom Secure encrypted device and subscription package today.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
