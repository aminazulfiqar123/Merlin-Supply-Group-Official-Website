import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/Site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Merlin Supply Group | Purchasing Inquiries" },
      { name: "description", content: "Contact Merlin Supply Group LLC about wholesale purchasing, supplier catalogs, authorized distribution, or brand partnership inquiries." },
      { property: "og:title", content: "Contact Merlin Supply Group | Purchasing Inquiries" },
      { property: "og:description", content: "Contact Merlin Supply Group LLC about wholesale purchasing, supplier catalogs, authorized distribution, or brand partnership inquiries." },
      { name: "twitter:title", content: "Contact Merlin Supply Group | Purchasing Inquiries" },
      { name: "twitter:description", content: "Contact Merlin Supply Group LLC about wholesale purchasing, supplier catalogs, authorized distribution, or brand partnership inquiries." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/contact" }],
  }),
  component: ContactPage,
});
