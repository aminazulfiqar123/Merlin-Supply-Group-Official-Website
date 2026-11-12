import { createFileRoute } from "@tanstack/react-router";
import { ShippingPolicyPage } from "@/components/site/CustomerPolicies";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy | Merlin Supply Group" },
      { name: "description", content: "Read Merlin Supply Group's shipping policy for direct U.S. orders, shipping costs, delivery estimates and shipping issues." },
      { property: "og:title", content: "Shipping Policy | Merlin Supply Group" },
      { property: "og:description", content: "Shipping rates, destinations, order processing and delivery information for Merlin Supply Group." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/shipping-policy" }],
  }),
  component: ShippingPolicyPage,
});
