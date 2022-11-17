import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./reducers/countries";
import themeModeReducer from "./reducers/themeMode";
import { tCountry } from "../types/tCountry";
import { initSortDir, initSelect } from "../functions/initials";

const backUpCountries: tCountry[] = JSON.parse(
  localStorage.getItem("countries") || "[]"
);
const favorites: number = backUpCountries.reduce(function (prev, country) {
  return country.isFavorit ? ++prev : prev;
}, 0);
const visited: number = backUpCountries.reduce(function (prev, country) {
  return country.visited > 0 ? ++prev : prev;
}, 0);

const store = configureStore({
  reducer: {
    countries: countriesReducer,
    theme: themeModeReducer,
  },
  preloadedState: {
    countries: {
      countries: backUpCountries,
      country: [],
      backUpCountries: backUpCountries,
      loading: false,
      error: false,
      favorites,
      visited,
      sortDir: initSortDir(),
      select: initSelect(),
    },
  },
});

store.subscribe(function () {
  localStorage.setItem(
    "countries",
    JSON.stringify(store.getState().countries.backUpCountries)
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
