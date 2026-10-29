import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/Site";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Authorized Reseller Statement | Merlin Supply Group" },
      {
        name: "description",
        content:
          "Read Merlin Supply Group LLC's authorized reseller statement and information about supplier authorization and distribution channel requirements.",
      },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/compliance" }],
  }),
  component: () => <PolicyPage kind="compliance" />,
});
