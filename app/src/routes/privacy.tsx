import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/Site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Merlin Supply Group" },
      {
        name: "description",
        content:
          "Read the Merlin Supply Group website privacy policy and learn how information submitted through business inquiry forms is handled.",
      },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/privacy" }],
  }),
  component: () => <PolicyPage kind="privacy" />,
});
