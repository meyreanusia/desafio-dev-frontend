import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontSize: 1.2,

    h1: {
      fontSize: "2.5rem",
      color: "white",
      fontWeight: "700",
      "@media (min-width:600px)": {
        fontSize: "3.5em",
      },
    },
    h2: {
      fontSize: "1.6rem",
      color: "white",
      "@media (min-width:600px)": {
        fontSize: "1.8rem",
      },
    },
  },
  palette: {
    background: {
      default: "#D1CAFE",
      paper: "#ffffff",
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: "white",

          "@media (min-width:600px)": {
            fontSize: "1.2rem",
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
