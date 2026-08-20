import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#7c3aed", light: "#a78bfa", dark: "#6d28d9" },
    secondary: { main: "#f97316", light: "#fb923c", dark: "#ea580c" },
    info: { main: "#06b6d4" },
    background: { default: "#faf8ff", paper: "rgba(255,255,255,0.9)" },
    text: { primary: "#1e1b4b", secondary: "#64748b" },
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
          backgroundColor: "#1e1b4b",
          fontSize: "0.75rem",
          fontWeight: 500,
          borderRadius: "0.5rem",
          padding: "6px 12px",
          boxShadow: "0 4px 16px rgba(30,27,75,0.22)",
        },
        arrow: { color: "#1e1b4b" },
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
