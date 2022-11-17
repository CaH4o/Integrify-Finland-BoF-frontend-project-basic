import { tCountry } from "./tCountry";

export interface ISortDir {
  byName: "asc" | "desc";
  byRegion: "asc" | "desc";
  bySubregion: "asc" | "desc";
  byCapital: "asc" | "desc";
  byAria: "asc" | "desc";
  byPopulation: "asc" | "desc";
  byLanguages: "asc" | "desc";
  byFavorite: "asc" | "desc";
  byVisited: "asc" | "desc";
}

export interface ISelect {
  byFavorites: boolean;
  byVisited: boolean;
}

export interface ICountriesReducer {
  countries: tCountry[];
  country: tCountry[];
  backUpCountries: tCountry[];
  loading: boolean;
  error: boolean;
  favorites: number;
  visited: number;
  sortDir: ISortDir;
  select: ISelect;
}
