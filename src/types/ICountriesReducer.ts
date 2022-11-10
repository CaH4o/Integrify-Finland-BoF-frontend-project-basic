import { tCountry } from "./tCountry";

export interface ICountriesReducer {
    countries: tCountry[];
    country: tCountry[];
    backUpCountries: tCountry[];
    loading: boolean;
    error: boolean;
    favorites: number;
    visited: number;
    sortDir: {
      byName: "asc" | "desc";
      byRegion: "asc" | "desc";
      bySubregion: "asc" | "desc";
      byCapital: "asc" | "desc";
      byAria: "asc" | "desc";
      byPopulation: "asc" | "desc";
      byLanguages: "asc" | "desc";
      byFavorite: "asc" | "desc";
      byVisited: "asc" | "desc";
    };
  }
  