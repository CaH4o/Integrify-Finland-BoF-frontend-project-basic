import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { json } from "stream/consumers";
import { tCountry } from "../../types/tCountry";

const initialState: tCountry[] = [];

export const fetchCountries = createAsyncThunk("feachCoumtries", async () => {
  let url: string = "https://restcountries.com/v3.1/all";
  url +=
    "?fields=flags,name,region,subregion,area,population,languages,currencies,capital,maps";
  return await fetch(url).then((data) => data.json());
  /*     .then((countries: tCountry[]) => {
      return countries.map((country: tCountry) => {
        country.isFavorit = false;
      });
    }); */
});

const countriesSlicer = createSlice({
  name: "countries",
  initialState,
  reducers: {
    sortCountriesByName: (state: tCountry[]) => {
      let sortDis: "asc" | "dsc" = "asc";
      (function () {
        if ((sortDis as "asc" | "dsc") === "asc") {
          state.sort((a, b) => a.name.common.localeCompare(b.name.common));
        } else {
          state.sort((a, b) => b.name.common.localeCompare(a.name.common));
        }
        sortDis = (sortDis as "asc" | "dsc") === "asc" ? "dsc" : "asc";
      })();
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
      (state: tCountry[], action /*: PayloadAction<tCountry[]> */) => {
        return action.payload;
      }
    );
  },
});

const countriesReducer = countriesSlicer.reducer;
export const { sortCountriesByName } = countriesSlicer.actions;
export default countriesReducer;
