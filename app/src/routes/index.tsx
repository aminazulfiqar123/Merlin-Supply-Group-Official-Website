import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/Site";
export const Route = createFileRoute("/")({ component: HomePage });
