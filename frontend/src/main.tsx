import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Routing } from "@/components/LayoutArea/Routing/Routing";
import { muiTheme } from "@/mui/theme";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      <LanguageProvider>
        <BrowserRouter>
          <a href="#home" className="skip-link">Skip to content</a>
          <Routing />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
