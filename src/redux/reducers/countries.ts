import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { tCountry } from "../../types/tCountry";
import { ICountriesReducer } from "../../types/ICountriesReducer";
import { fetchCountries, fetchCountry } from "../../functions/asyncThunk";
import { initSortDir, initSelect } from "../../functions/initials";

const initialState: ICountriesReducer = {
  countries: [],
  country: [],
  backUpCountries: [],
  loading: false,
  error: false,
  favorites: 0,
  visited: 0,
  sortDir: initSortDir(),
  select: initSelect(),
};

const countriesSlicer = createSlice({
  name: "countries",
  initialState,
  reducers: {
    addRemoveFavoriteCountry: function (
      state: ICountriesReducer,
      action: PayloadAction<string>
    ) {
      state.backUpCountries.forEach((country) => {
        if (country.name.official === action.payload) {
          country.isFavorit = !country.isFavorit;
        }
      });
      state.countries.forEach((country) => {
        if (country.name.official === action.payload) {
          country.isFavorit = !country.isFavorit;
        }
      });
      state.favorites = state.backUpCountries.filter(
        (country) => country.isFavorit
      ).length;
    },
    addVisitedCountry: function (
      state: ICountriesReducer,
      action: PayloadAction<string>
    ) {
      let changeVisited: boolean = false;
      state.backUpCountries.forEach((country) => {
        if (country.name.official === action.payload) {
          if (!country.visited++) changeVisited = true;
        }
      });
      state.countries.forEach((country) => {
        if (country.name.official === action.payload) {
          ++country.visited;
        }
      });
      if (changeVisited) {
        state.visited = state.backUpCountries.filter(
          (country) => country.visited > 0
        ).length;
      }
    },
    removeVisitedCountry: function (
      state: ICountriesReducer,
      action: PayloadAction<string>
    ) {
      let changeVisited: boolean = false;
      state.backUpCountries.forEach((country) => {
        if (country.name.official === action.payload) {
          if (!--country.visited) changeVisited = true;
          if (country.visited < 0) country.visited = 0;
        }
      });
      state.countries.forEach((country) => {
        if (country.name.official === action.payload) {
          if (country.visited > 0) --country.visited;
        }
      });
      if (changeVisited) {
        state.visited = state.backUpCountries.filter(
          (country) => country.visited > 0
        ).length;
      }
    },
    searchCountries: function (
      state: ICountriesReducer,
      action: PayloadAction<string>
    ) {
      state.countries = state.backUpCountries.filter((country) => {
        return (
          country.name.common +
          "|" +
          country.region +
          "|" +
          country.subregion +
          "|" +
          (country.capital ? country.capital : "") +
          "|" +
          (country.languages ? Object.values(country.languages).join(",") : "")
        )
          .toLowerCase()
          .includes(action.payload.toLowerCase().trim());
      });
    },
    sortCountriesByName: function (state: ICountriesReducer) {
      const byName = state.sortDir.byName === "asc" ? "desc" : "asc";
      if (byName === "asc") {
        state.countries.sort((a, b) =>
          b.name.common.localeCompare(a.name.common)
        );
      } else {
        state.countries.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
      }
      state.sortDir = { ...initSortDir(), byName };
    },
    sortCountriesByRegion: function (state: ICountriesReducer) {
      const byRegion = state.sortDir.byRegion === "asc" ? "desc" : "asc";
      if (byRegion === "asc") {
        state.countries.sort((a, b) => b.region.localeCompare(a.region));
      } else {
        state.countries.sort((a, b) => a.region.localeCompare(b.region));
      }
      state.sortDir = { ...initSortDir(), byRegion };
    },
    sortCountriesBySubregion: function (state: ICountriesReducer) {
      const bySubregion = state.sortDir.bySubregion === "asc" ? "desc" : "asc";
      if (bySubregion === "asc") {
        state.countries.sort((a, b) => {
          if (a.subregion && b.subregion) {
            return b.subregion.localeCompare(a.subregion);
          } else {
            return -1;
          }
        });
      } else {
        state.countries.sort((a, b) => {
          if (a.subregion && b.subregion) {
            return a.subregion.localeCompare(b.subregion);
          } else {
            return -1;
          }
        });
      }
      state.sortDir = { ...initSortDir(), bySubregion };
    },
    sortCountriesByCapital: function (state: ICountriesReducer) {
      const byCapital = state.sortDir.byCapital === "asc" ? "desc" : "asc";
      if (byCapital === "asc") {
        state.countries.sort((a, b) => {
          if (a.capital && b.capital) {
            return b.capital.join("").localeCompare(a.capital.join(""));
          } else {
            return -1;
          }
        });
      } else {
        state.countries.sort((a, b) => {
          if (a.capital && b.capital) {
            return a.capital.join("").localeCompare(b.capital.join(""));
          } else {
            return -1;
          }
        });
      }
      state.sortDir = { ...initSortDir(), byCapital };
    },
    sortCountriesByAria: function (state: ICountriesReducer) {
      const byAria = state.sortDir.byAria === "asc" ? "desc" : "asc";
      if (byAria === "asc") {
        state.countries.sort((a, b) => b.area - a.area);
      } else {
        state.countries.sort((a, b) => a.area - b.area);
      }
      state.sortDir = { ...initSortDir(), byAria };
    },
    sortCountriesByPopulation: function (state: ICountriesReducer) {
      const byPopulation =
        state.sortDir.byPopulation === "asc" ? "desc" : "asc";
      if (byPopulation === "asc") {
        state.countries.sort((a, b) => b.population - a.population);
      } else {
        state.countries.sort((a, b) => a.population - b.population);
      }
      state.sortDir = { ...initSortDir(), byPopulation };
    },
    sortCountriesByLanguages: function (state: ICountriesReducer) {
      const byLanguages = state.sortDir.byLanguages === "asc" ? "desc" : "asc";
      if (byLanguages === "asc") {
        state.countries.sort((a, b) => {
          if (a.languages && b.languages) {
            return Object.values(b.languages)
              .join("")
              .localeCompare(Object.values(a.languages).join(""));
          } else {
            return -1;
          }
        });
      } else {
        state.countries.sort((a, b) => {
          if (a.languages && b.languages) {
            return Object.values(a.languages)
              .join("")
              .localeCompare(Object.values(b.languages).join(""));
          } else {
            return -1;
          }
        });
      }
      state.sortDir = { ...initSortDir(), byLanguages };
    },
    sortCountriesByFavorite: function (state: ICountriesReducer) {
      const byFavorite = state.sortDir.byFavorite === "asc" ? "desc" : "asc";
      if (byFavorite === "asc") {
        state.countries.sort((a, b) => {
          return a.isFavorit === b.isFavorit ? 0 : a.isFavorit ? 1 : -1;
        });
      } else {
        state.countries.sort((a, b) => {
          return a.isFavorit === b.isFavorit ? 0 : a.isFavorit ? -1 : 1;
        });
      }
      state.sortDir = { ...initSortDir(), byFavorite };
    },
    sortCountriesByVisited: function (state: ICountriesReducer) {
      const byVisited = state.sortDir.byVisited === "asc" ? "desc" : "asc";
      if (byVisited === "asc") {
        state.countries.sort((a, b) => a.visited - b.visited);
      } else {
        state.countries.sort((a, b) => b.visited - a.visited);
      }
      state.sortDir = { ...initSortDir(), byVisited };
    },
    selectCountriesByFavorites: function (state: ICountriesReducer) {
      if (state.favorites > 0) {
        const byFavorites = !state.select.byFavorites;
        if (byFavorites) {
          state.countries = state.backUpCountries.filter((country) => {
            return country.isFavorit;
          });
        } else {
          state.countries = state.backUpCountries.filter(() => true);
        }
        state.select = { ...initSelect(), byFavorites };
      }
    },
    selectCountriesByVisited: function (state: ICountriesReducer) {
      if (state.visited > 0) {
        const byVisited = !state.select.byVisited;
        if (byVisited) {
          state.countries = state.backUpCountries.filter((country) => {
            return country.visited > 0;
          });
        } else {
          state.countries = state.backUpCountries.filter(() => true);
        }
        state.select = { ...initSelect(), byVisited };
      }
    },
  },
  extraReducers: (build) => {
    build
      .addCase(
        fetchCountries.fulfilled,
        (state: ICountriesReducer, action: PayloadAction<tCountry[]>) => {
          state.backUpCountries = action.payload;
          state.countries = state.backUpCountries.filter(() => true);
          state.loading = false;
        }
      )
      .addCase(fetchCountries.pending, (state: ICountriesReducer) => {
        state.loading = true;
      })
      .addCase(fetchCountries.rejected, (state: ICountriesReducer) => {
        state.loading = false;
        state.error = true;
      });
    build
      .addCase(
        fetchCountry.fulfilled,
        (state: ICountriesReducer, action: PayloadAction<tCountry[]>) => {
          state.country = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCountry.pending, (state: ICountriesReducer) => {
        state.loading = true;
      })
      .addCase(fetchCountry.rejected, (state: ICountriesReducer) => {
        state.loading = false;
        state.error = true;
      });
  },
});

const countriesReducer = countriesSlicer.reducer;
export const {
  searchCountries,
  sortCountriesByName,
  sortCountriesByRegion,
  sortCountriesByCapital,
  sortCountriesBySubregion,
  sortCountriesByAria,
  sortCountriesByPopulation,
  sortCountriesByLanguages,
  addRemoveFavoriteCountry,
  sortCountriesByFavorite,
  removeVisitedCountry,
  addVisitedCountry,
  sortCountriesByVisited,
  selectCountriesByVisited,
  selectCountriesByFavorites,
} = countriesSlicer.actions;
export default countriesReducer;
