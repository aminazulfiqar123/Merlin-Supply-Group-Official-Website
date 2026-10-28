import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/site/Site";
export const Route = createFileRoute("/compliance")({ component: () => <PolicyPage kind="compliance" /> });
