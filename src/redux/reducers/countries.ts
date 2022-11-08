import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";
import { tCountry } from "../../types/tCountry";

interface ICountriesReducer {
  countries: tCountry[];
  showCountries: tCountry[];
  loading: boolean;
  error: boolean;
  sortDir: {
    byName: "asc" | "dsc";
    byRigeon: "asc" | "dsc";
    bySubrigeon: "asc" | "dsc";
    byCapital: "asc" | "dsc";
    byAria: "asc" | "dsc";
    byPopulation: "asc" | "dsc";
    byLanguages: "asc" | "dsc";
  };
}

const initialState: ICountriesReducer = {
  countries: [],
  showCountries: [],
  loading: false,
  error: false,
  sortDir: {
    byName: "asc",
    byRigeon: "asc",
    bySubrigeon: "asc",
    byCapital: "asc",
    byAria: "asc",
    byPopulation: "asc",
    byLanguages: "asc",
  },
};

const countriesSlicer = createSlice({
  name: "countries",
  initialState,
  reducers: {
    sortCountriesByName: (state: ICountriesReducer) => {
      const sortDir = state.sortDir.byName;
      if (sortDir === "asc") {
        state.countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      } else {
        state.countries.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        );
      }
      state.sortDir.byName = sortDir === "asc" ? "dsc": "asc";
    },
    /* postCountries: (state: tCountry[]) => {
      localStorage.setItem(
        "favCountries",
        JSON.stringify(
          state.filter((country) => {
            country.isFavorit;
          })
        )
      );
    }, */
    /*   getCountries: (state: tCountry[]) => {
      const favCountries: tCountry[] = JSON.parse(
        localStorage.getItem("favCountries")||""
      );
      if (favCountries) {
        favCountries.forEach((FavCountry:tCountry)=>{
          state.splice( , 1 )
        })
        
      }
      
    }, */
  },
  extraReducers: (build) => {
    build.addCase(
      fetchCountries.fulfilled,
      (state: ICountriesReducer, action: PayloadAction<tCountry[]>) => {
        state.countries = action.payload;
      }
    );
  },
});

export const fetchCountries = createAsyncThunk("feachCoumtries", async () => {
  let url: string = "https://restcountries.com/v3.1/all";
  url +=
    "?fields=flags,name,region,subregion,area,population,languages,currencies,capital,maps";
  return await fetch(url)
    .then((data) => data.json())
    .then((countries: tCountry[]) => {
      return countries.map((country: tCountry) => {
        return { ...country, isFavorit: false, isVisited: false };
      });
    });
});

const countriesReducer = countriesSlicer.reducer;
export const { sortCountriesByName } = countriesSlicer.actions;
export default countriesReducer;
