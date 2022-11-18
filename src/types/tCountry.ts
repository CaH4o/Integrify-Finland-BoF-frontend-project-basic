export type tCurrency = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type tLanguage = {
  [index: string]: string;
};

export interface tCountry {
  name: {
    common: string;
    official: string;
  };
  currencies?: tCurrency;
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: tLanguage;
  area: number;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
  };
  isFavorit: boolean;
  visited: number;
}
