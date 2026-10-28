/**
 * Scroll-scrub engine data is intentionally empty until a generated film and
 * exact-frame posters can be produced. The current site uses CSS scroll-linked
 * motion and image movement as a graceful fallback.
 */
import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D2A04A",
  background: "#0B2E27",
  ink: "#FFFFFF",
  muted: "#C8D7CF",
};

export const scrollScrubScenes: ScrollScrubScene[] = [];
