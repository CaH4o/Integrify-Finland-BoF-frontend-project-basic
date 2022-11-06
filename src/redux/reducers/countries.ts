import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { tCountry } from "../../types/tCountry";

const initialState: tCountry[] = [];

const countriesSlicer = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state: tCountry[], action: PayloadAction<tCountry[]>) => {
      return action.payload;
    },
    sortCountriesByName: (
      state: tCountry[],
      action: PayloadAction<"asc" | "dsc">
    ) => {
      if (action.payload === "asc") {
        state.sort((a, b) => a.name.common.localeCompare(b.name.common));
      } else {
        state.sort((a, b) => b.name.common.localeCompare(a.name.common));
      }
    },
  },
});

const countriesReducer = countriesSlicer.reducer;
export const { setCountries, sortCountriesByName } = countriesSlicer.actions;
export default countriesReducer;