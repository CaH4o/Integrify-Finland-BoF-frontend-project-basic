export interface tCountry {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: {
    [index: string]: string;
  };
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
}
