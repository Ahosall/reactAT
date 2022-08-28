import React from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";
import darkScrollbar from "@mui/material/darkScrollbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import App from "./App";

import { dark } from "./utils/themes";
import { AuthProvider } from "./contexts/auth";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <CssBaseline />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
