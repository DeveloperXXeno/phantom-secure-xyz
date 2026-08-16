import { createFileRoute } from "@tanstack/react-router";

import { LegacyPage } from "@/components/LegacyPage";
import { html } from "@/legacy/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'Phantom Secure — The World’s Most Trusted Communication Service' },
      { name: "description", content: 'Encrypted BlackBerry and Android devices with uncrackable PGP messaging, private chat and worldwide support.' },
      { property: "og:title", content: 'Phantom Secure — The World’s Most Trusted Communication Service' },
      { property: "og:description", content: 'Encrypted BlackBerry and Android devices with uncrackable PGP messaging, private chat and worldwide support.' },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return <LegacyPage html={html} />;
}
