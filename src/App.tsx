import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/App.css";
import SectionHeader from "./components/Header";
import PageHome from "./components/Home";
import PageCountrList from "./components/CountrList";
import PageSingleCountry from "./components/SingleCountry";
import SectionFooter from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SectionHeader />
        <Routes>
          <Route path="/countries">
            <Route path="" element={<PageCountrList />} />
            <Route path=":name" element={<PageSingleCountry />} />
          </Route>
          <Route path="/" element={<PageHome />} />
        </Routes>
        <SectionFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
