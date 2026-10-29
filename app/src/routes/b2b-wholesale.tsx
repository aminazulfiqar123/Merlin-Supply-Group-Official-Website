import { createFileRoute } from "@tanstack/react-router";
import { WholesalePage } from "@/components/site/Site";

export const Route = createFileRoute("/b2b-wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale Supplier Onboarding | Merlin Supply Group" },
      {
        name: "description",
        content:
          "U.S. brands, manufacturers, and distributors can submit wholesale catalogs, line cards, pricing tiers, and onboarding requirements to Merlin Supply Group.",
      },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/b2b-wholesale" }],
  }),
  component: WholesalePage,
});
