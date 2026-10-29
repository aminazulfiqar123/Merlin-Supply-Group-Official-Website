import { createFileRoute } from "@tanstack/react-router";
import { CategoriesPage } from "@/components/site/Site";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Wholesale Product Categories | Merlin Supply Group" },
      { name: "description", content: "Explore Merlin Supply Group's wholesale product categories and submit a catalog for review of sourcing fit, supplier documentation, and commercial terms." },
      { property: "og:title", content: "Wholesale Product Categories | Merlin Supply Group" },
      { property: "og:description", content: "Explore Merlin Supply Group's wholesale product categories and submit a catalog for review of sourcing fit, supplier documentation, and commercial terms." },
      { name: "twitter:title", content: "Wholesale Product Categories | Merlin Supply Group" },
      { name: "twitter:description", content: "Explore Merlin Supply Group's wholesale product categories and submit a catalog for review of sourcing fit, supplier documentation, and commercial terms." },
    ],
    links: [{ rel: "canonical", href: "https://merlinsupplygroup.com/categories" }],
  }),
  component: CategoriesPage,
});
