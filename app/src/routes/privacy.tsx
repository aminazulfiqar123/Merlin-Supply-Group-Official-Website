import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/Site";
export const Route = createFileRoute("/privacy")({ component: () => <PolicyPage kind="privacy" /> });
