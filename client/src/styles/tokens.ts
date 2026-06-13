export const colors = {
  bg: "#ffffff",
  bgSubtle: "#f8fafc",
  bgMuted: "#f1f5f9",
  turquoise: "#0d9488",
  turquoiseLight: "#14b8a6",
  cyan: "#06b6d4",
  orange: "#f97316",
  redOrange: "#ea580c",
  text: "#0f172a",
  textMuted: "#64748b",
  border: "#e2e8f0",
} as const;

export const iconAccent = {
  turquoise: "text-teal-600 bg-teal-50 border-teal-200 shadow-teal-100",
  orange: "text-orange-600 bg-orange-50 border-orange-200 shadow-orange-100",
  redOrange: "text-orange-700 bg-orange-50 border-orange-300 shadow-orange-100",
} as const;

export const fonts = {
  sans: '"Inter", system-ui, sans-serif',
  display: '"Space Grotesk", system-ui, sans-serif',
} as const;
