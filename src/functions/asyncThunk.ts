import { createAsyncThunk } from "@reduxjs/toolkit";

import { tCountry } from "../types/tCountry";

export const fetchCountries = createAsyncThunk(
    "feachCoumtries",
    async function () {
      let url: string = "https://restcountries.com/v3.1/all";
      url +=
        "?fields=flags,name,region,subregion,area,population,languages,currencies,capital,maps";
      return await fetch(url)
        .then((data) => data.json())
        .then((countries: tCountry[]) => {
          return countries.map((country: tCountry) => {
            return { ...country, isFavorit: false, visited: 0 };
          });
        });
    }
  );
  
  export const fetchCountry = createAsyncThunk(
    "feachCoumtry",
    async function (countryName: string) {
      let url: string = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
      return await fetch(url)
        .then((data) => data.json())
        .then((countries: tCountry[]) => {
          return countries.map((country: tCountry) => {
            return { ...country, isFavorit: false, visited: 0 };
          });
        });
    }
  );