import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/Site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Merlin Supply Group | U.S. Wholesale Distribution" },
      { name: "description", content: "Merlin Supply Group works with U.S. brands, manufacturers, and authorized distributors on wholesale purchasing, supplier onboarding, and domestic distribution." },
      { property: "og:title", content: "Merlin Supply Group | U.S. Wholesale Distribution" },
      { property: "og:description", content: "Merlin Supply Group works with U.S. brands, manufacturers, and authorized distributors on wholesale purchasing, supplier onboarding, and domestic distribution." },
      { name: "twitter:title", content: "Merlin Supply Group | U.S. Wholesale Distribution" },
      { name: "twitter:description", content: "Merlin Supply Group works with U.S. brands, manufacturers, and authorized distributors on wholesale purchasing, supplier onboarding, and domestic distribution." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/" }],
  }),
  component: HomePage,
});
