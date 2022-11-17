import { ISortDir, ISelect } from "../types/ICountriesReducer";

export function initSortDir(): ISortDir {
  return {
    byName: "asc",
    byRegion: "asc",
    bySubregion: "asc",
    byCapital: "asc",
    byAria: "asc",
    byPopulation: "asc",
    byLanguages: "asc",
    byFavorite: "asc",
    byVisited: "asc",
  };
}

export function initSelect(): ISelect {
  return {
    byFavorites: false,
    byVisited: false,
  };
}
