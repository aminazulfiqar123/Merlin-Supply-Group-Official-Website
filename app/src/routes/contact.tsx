import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/Site";
export const Route = createFileRoute("/contact")({ component: ContactPage });
