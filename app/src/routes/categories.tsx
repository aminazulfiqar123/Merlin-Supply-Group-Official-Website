import { createFileRoute } from "@tanstack/react-router";
import { CategoriesPage } from "@/components/site/Site";
export const Route = createFileRoute("/categories")({ component: CategoriesPage });
