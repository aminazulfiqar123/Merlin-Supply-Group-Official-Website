import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/Site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Distribution | Merlin Supply Group" },
      {
        name: "description",
        content:
          "Review the website terms and distribution-related terms published by Merlin Supply Group LLC.",
      },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/terms" }],
  }),
  component: () => <PolicyPage kind="terms" />,
});
