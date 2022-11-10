import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode, Box } from "@mui/material";

import "./styles/App.css";
import SectionHeader from "./components/Header";
import PageHome from "./pages/Home";
import PageCountry from "./pages/Country";
import SectionFooter from "./components/Footer";
import { useAppSelector } from "./hooks/reduxHooks";
import { RootState } from "./redux/store";

function App() {
  const mode: PaletteMode = useAppSelector(
    (state: RootState) => state.theme.mode
  );

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#D0B8A8" },
            secondary: { main: "#F8EDE3" },
            divider: "#DFD3C3",
            text: {
              primary: "#7D6E83",
              secondary: "#7D6E83",
            },
            background: { default: "#fff" },
          }
        : {
            primary: { main: "#9F73AB" },
            secondary: { main: "#3F3B6C" },
            divider: "#624F82",
            text: {
              primary: "#A3C7D6",
              secondary: "#A3C7D6",
            },
            background: { default: "#000" },
          }),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box
            sx={{
              bgcolor: "background.default",
              height: "100%",
              transition: "0.5s",
            }}
          >
            <SectionHeader />
            <Routes>
              <Route path="/">
                <Route path="" element={<PageHome />} />
                <Route path=":name" element={<PageCountry />} />
              </Route>
            </Routes>
            <SectionFooter />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
