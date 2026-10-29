import { createFileRoute } from "@tanstack/react-router";
import { PartnershipsPage } from "@/components/site/Site";

export const Route = createFileRoute("/brand-partnerships")({
  head: () => ({
    meta: [
      { title: "Brand & Distribution Partnerships | Merlin Supply Group" },
      { name: "description", content: "Explore distribution partnerships with Merlin Supply Group. Brand owners and authorized suppliers can discuss purchasing, channel requirements, and catalog review." },
      { property: "og:title", content: "Brand & Distribution Partnerships | Merlin Supply Group" },
      { property: "og:description", content: "Explore distribution partnerships with Merlin Supply Group. Brand owners and authorized suppliers can discuss purchasing, channel requirements, and catalog review." },
      { name: "twitter:title", content: "Brand & Distribution Partnerships | Merlin Supply Group" },
      { name: "twitter:description", content: "Explore distribution partnerships with Merlin Supply Group. Brand owners and authorized suppliers can discuss purchasing, channel requirements, and catalog review." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/brand-partnerships" }],
  }),
  component: PartnershipsPage,
});
