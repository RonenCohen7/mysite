import { CalendarClock, Plane, Scale, Users, Wine, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "see-you-tomorrow": CalendarClock,
  "tmore-talent-pool": Users,
  "hamasgeria-hadar-pub": Wine,
  "vacation-abroad": Plane,
  "lowproject-court-judgments": Scale,
};

export function getProjectIcon(slug: string): LucideIcon {
  return ICONS[slug] ?? CalendarClock;
}
