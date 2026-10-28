import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/Site";
export const Route = createFileRoute("/about")({ component: AboutPage });
