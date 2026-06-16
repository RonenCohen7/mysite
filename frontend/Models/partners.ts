import timorLogo from "@/Assets/Images/timor-logo.png";

export interface Partner {
  id: string;
  name: { en: string; he: string };
  logo: string;
  url?: string;
}

export const partners: Partner[] = [
  {
    id: "timor",
    name: { en: "Timor", he: "תימור" },
    logo: timorLogo,
  },
];
