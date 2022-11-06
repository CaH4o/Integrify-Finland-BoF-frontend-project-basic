type tNativeName = {
  [index: string]: {
    official: string;
    common: string;
  };
};

type tDemonyms = {
  [index: string]: {
    f: string;
    m: string;
  };
};

export interface tCountry {
  name: {
    common: string;
    official: string;
    nativeName?: tNativeName;
  };
  tld: string[];
  cca2: string; 
  ccn3: string; 
  cca3: string; 
  cioc: string; 
  independent: boolean; 
  status: string; 
  unMember: boolean; 
  currencies?: object; 
  idd: {
    root: string;
    suffixes: string[];
  };
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: object;
  translations: tNativeName[];
  latlng: number[]; 
  landlocked: boolean; 
  borders?: string[];
  area: number; 
  demonyms: tDemonyms[];
  flag: string; 
  maps: {
    googleMaps: string; 
    openStreetMaps: string; 
  };
  population: number;
  gini?: {
    "2018": number;
  };
  fifa?: string; 
  car: {
    signs: string[]; 
    side: string;
  };
  timezones: string[]; 
  continents: string[]; 
  flags: {
    png: string; 
    svg: string; 
  };
  coatOfArms: {
    png: string; 
    svg: string; 
  };
  startOfWeek: string; 
  capitalInfo?: {
    latlng: number[];
  };
  postalCode?: {
    format: string; 
    regex: string; 
  };
}
