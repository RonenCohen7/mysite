import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0d9488", light: "#14b8a6", dark: "#0f766e" },
    secondary: { main: "#f97316", light: "#fb923c", dark: "#ea580c" },
    background: { default: "#ffffff", paper: "rgba(255,255,255,0.85)" },
    text: { primary: "#0f172a", secondary: "#64748b" },
  },
  typography: {
    fontFamily: '"Inter", system-ui, sans-serif',
    h1: { fontFamily: '"Space Grotesk", system-ui, sans-serif' },
    h2: { fontFamily: '"Space Grotesk", system-ui, sans-serif' },
    h3: { fontFamily: '"Space Grotesk", system-ui, sans-serif' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#0f172a",
          fontSize: "0.75rem",
          fontWeight: 500,
          borderRadius: "0.5rem",
          padding: "6px 12px",
          boxShadow: "0 4px 16px rgba(15,23,42,0.2)",
        },
        arrow: { color: "#0f172a" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});
