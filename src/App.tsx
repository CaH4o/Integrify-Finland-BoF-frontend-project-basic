import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

import "./styles/App.css";
import SectionHeader from "./components/Header";
import PageCountrList from "./components/CountrList";
import PageSingleCountry from "./components/SingleCountry";
import SectionFooter from "./components/Footer";
import { useAppSelector } from "./hooks/reduxHooks";
import { RootState } from "./redux/store";

function App() {
  const mode: "light" | "dark" = useAppSelector(
      (state: RootState) => state.themeModeReducer
    );
  
  const theme = createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              primary: { main: "#F8EDE3" },
              secondary: { main: "#D0B8A8" },
              divider: "#DFD3C3",
              text: {
                primary: "#7D6E83",
                secondary: "#7D6E83",
              },
              background: { default: "#fff" },
            }
          : {
              primary: { main: "#3F3B6C" },
              secondary: { main: "#9F73AB" },
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
          <SectionHeader />
          <Routes>
            <Route path="/">
              <Route path="" element={<PageCountrList />} />
              <Route path=":name" element={<PageSingleCountry />} />
            </Route>
          </Routes>
          <SectionFooter />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
