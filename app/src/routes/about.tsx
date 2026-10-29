import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/Site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Merlin Supply Group | U.S. Distributor" },
      { name: "description", content: "Learn about Merlin Supply Group LLC, a Wyoming-based wholesale distributor focused on domestic procurement, supplier relationships, and responsible marketplace distribution." },
      { property: "og:title", content: "About Merlin Supply Group | U.S. Distributor" },
      { property: "og:description", content: "Learn about Merlin Supply Group LLC, a Wyoming-based wholesale distributor focused on domestic procurement, supplier relationships, and responsible marketplace distribution." },
      { name: "twitter:title", content: "About Merlin Supply Group | U.S. Distributor" },
      { name: "twitter:description", content: "Learn about Merlin Supply Group LLC, a Wyoming-based wholesale distributor focused on domestic procurement, supplier relationships, and responsible marketplace distribution." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/about" }],
  }),
  component: AboutPage,
});
