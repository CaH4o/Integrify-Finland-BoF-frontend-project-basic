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
    common: string; //"Bulgaria"
    official: string; //"Republic of Bulgaria"
    nativeName?: tNativeName; //{ bul: { official: "Република България"; common: "България"; }; };
  };
  tld: string[]; //"[.bg]"
  cca2: string; //"BG"
  ccn3: string; //"100"
  cca3: string; //"BGR"
  cioc: string; //"BUL"
  independent: boolean; //true
  status: string; //"officially-assigned"
  unMember: boolean; //true
  currencies?: object; // { BGN: { name: "Bulgarian lev"; symbol: "лв"; }; };
  idd: {
    root: string; //"+3",
    suffixes: string[]; //["59"]
  };
  capital?: string[]; //[Sofia]
  altSpellings: string[]; //["BG", "Republic of Bulgaria", "Република България"]
  region: string; //"Europe"
  subregion?: string; //"Southeast Europe"
  languages?: object; // { bul: "Bulgarian" }
  translations: tNativeName[] /* {
    ara: { official: "جمهورية بلغاريا"; common: "بلغاريا"; };
    bre: { official: "Republik Bulgaria"; common: "Bulgaria"; };
    ces: { official: "Bulharská republika"; common: "Bulharsko"; };
    cym: { official: "Gweriniaeth Bwlgaria"; common: "Bwlgaria"; };
    deu: { official: "Republik Bulgarien"; common: "Bulgarien"; };
    est: { official: "Bulgaaria Vabariik"; common: "Bulgaaria"; };
    fin: { official: "Bulgarian tasavalta"; common: "Bulgaria"; };
    fra: { official: "République de Bulgarie"; common: "Bulgarie"; };
    hrv: { official: "Republika Bugarska"; common: "Bugarska"; };
    hun: { official: "Bolgár Köztársaság"; common: "Bulgária"; };
    ita: { official: "Repubblica di Bulgaria"; common: "Bulgaria"; };
    jpn: { official: "ブルガリア共和国"; common: "ブルガリア"; };
    kor: { official: "불가리아 공화국"; common: "불가리아"; };
    nld: { official: "Republiek Bulgarije"; common: "Bulgarije"; };
    per: { official: "جمهوری بلغارستان"; common: "بلغارستان"; };
    pol: { official: "Republika Bułgarii"; common: "Bułgaria"; };
    por: { official: "República da Bulgária"; common: "Bulgária"; };
    rus: { official: "Республика Болгария"; common: "Болгария"; };
    slk: { official: "Bulharská republika"; common: "Bulharsko"; };
    spa: { official: "República de Bulgaria"; common: "Bulgaria"; };
    swe: { official: "Republiken Bulgarien"; common: "Bulgarien"; };
    tur: { official: "Bulgaristan Cumhuriyeti"; common: "Bulgaristan"; };
    urd: { official: "جمہوریہ بلغاریہ"; common: "بلغاریہ"; };
    zho: { official: "保加利亚共和国"; common: "保加利亚"; };
  }; */;
  latlng: number[]; //[43.0, 25.0]
  landlocked: boolean; //false
  borders?: string[]; //["GRC", "MKD", "ROU", "SRB", "TUR"]
  area: number; //110879.0
  demonyms: tDemonyms[]; /* {
    eng: { f: "Bulgarian";  m: "Bulgarian"; };
    fra: { f: "Bulgare"; m: "Bulgare"; };
  }; */
  flag: string; //"🇧🇬"
  maps: {
    googleMaps: string; //"https://goo.gl/maps/F5uAhDGWzc3BrHfm9"
    openStreetMaps: string; //"https://www.openstreetmap.org/relation/186382"
  };
  population: number; //6927288
  gini?: {
    "2018": number; // 41.3
  };
  fifa?: string; //"BUL"
  car: {
    signs: string[]; //["BG"]
    side: string; //"right"
  };
  timezones: string[]; //["UTC+02:00"]
  continents: string[]; //["Europe"]
  flags: {
    png: string; //"https://flagcdn.com/w320/bg.png"
    svg: string; //"https://flagcdn.com/bg.svg"
  };
  coatOfArms: {
    png: string; //"https://mainfacts.com/media/images/coats_of_arms/bg.png"
    svg: string; //"https://mainfacts.com/media/images/coats_of_arms/bg.svg"
  };
  startOfWeek: string; //"monday"
  capitalInfo?: {
    latlng: number[]; //[42.68, 23.32]
  };
  postalCode?: {
    format: string; //"####"
    regex: string; //"^(\\d{4})$"
  };
}
