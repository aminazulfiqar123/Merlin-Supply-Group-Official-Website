import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/Site";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Authorized Reseller Statement | Merlin Supply Group" },
      { name: "description", content: "Read Merlin Supply Group LLC's authorized reseller statement and information about supplier authorization and distribution channel requirements." },
      { property: "og:title", content: "Authorized Reseller Statement | Merlin Supply Group" },
      { property: "og:description", content: "Read Merlin Supply Group LLC's authorized reseller statement and information about supplier authorization and distribution channel requirements." },
      { name: "twitter:title", content: "Authorized Reseller Statement | Merlin Supply Group" },
      { name: "twitter:description", content: "Read Merlin Supply Group LLC's authorized reseller statement and information about supplier authorization and distribution channel requirements." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/compliance" }],
  }),
  component: () => <PolicyPage kind="compliance" />,
});
