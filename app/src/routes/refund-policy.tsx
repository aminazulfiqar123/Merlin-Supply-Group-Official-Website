import { createFileRoute } from "@tanstack/react-router";
import { RefundPolicyPage } from "@/components/site/CustomerPolicies";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Returns Policy | Merlin Supply Group" },
      { name: "description", content: "Review Merlin Supply Group's 30-day retail return request window and procedures for returns and refunds." },
      { property: "og:title", content: "Refund & Returns Policy | Merlin Supply Group" },
      { property: "og:description", content: "Details about our 30-day return window and return/refund procedures." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/refund-policy" }],
  }),
  component: RefundPolicyPage,
});
