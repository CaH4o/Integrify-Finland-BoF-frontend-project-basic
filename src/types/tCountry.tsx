export interface tCountry {
  name: {
    common: string; //"Bulgaria"
    official: string; //"Republic of Bulgaria"
    nativeName: {
      bul: {
        official: string; //"Република България"
        common: string; //"България"
      };
    };
  };
  tld: string[]; //"[.bg]"
  cca2: string; //"BG"
  ccn3: string; //"100"
  cca3: string; //"BGR"
  cioc: string; //"BUL"
  independent: boolean; //true
  status: string; //"officially-assigned"
  unMember: boolean; //true
  currencies: {
    BGN: {
      name: string; //"Bulgarian lev"
      symbol: string; //"лв"
    };
  };
  idd: {
    root: string; //"+3",
    suffixes: string[]; //["59"]
  };
  capital: string[]; //[Sofia]
  altSpellings: string[]; //["BG", "Republic of Bulgaria", "Република България"]
  region: string; //"Europe"
  subregion: string; //"Southeast Europe"
  languages?: object; // { bul: "Bulgarian" } || { "eng": "English", "hin": "Hindi" }
  translations: {
    ara: {
      official: string; //"جمهورية بلغاريا"
      common: string; //"بلغاريا"
    };
    bre: {
      official: string; //"Republik Bulgaria"
      common: string; //"Bulgaria"
    };
    ces: {
      official: string; //"Bulharská republika"
      common: string; //"Bulharsko"
    };
    cym: {
      official: string; //"Gweriniaeth Bwlgaria"
      common: string; //"Bwlgaria"
    };
    deu: {
      official: string; //"Republik Bulgarien"
      common: string; //"Bulgarien"
    };
    est: {
      official: string; //"Bulgaaria Vabariik"
      common: string; //"Bulgaaria"
    };
    fin: {
      official: string; //"Bulgarian tasavalta"
      common: string; //"Bulgaria"
    };
    fra: {
      official: string; //"République de Bulgarie"
      common: string; //"Bulgarie"
    };
    hrv: {
      official: string; //"Republika Bugarska"
      common: string; //"Bugarska"
    };
    hun: {
      official: string; //"Bolgár Köztársaság"
      common: string; //"Bulgária"
    };
    ita: {
      official: string; //"Repubblica di Bulgaria"
      common: string; //"Bulgaria"
    };
    jpn: {
      official: string; //"ブルガリア共和国"
      common: string; //"ブルガリア"
    };
    kor: {
      official: string; //"불가리아 공화국"
      common: string; //"불가리아"
    };
    nld: {
      official: string; //"Republiek Bulgarije";
      common: string; //"Bulgarije"
    };
    per: {
      official: string; //"جمهوری بلغارستان"
      common: string; //"بلغارستان"
    };
    pol: {
      official: string; //"Republika Bułgarii"
      common: string; //"Bułgaria"
    };
    por: {
      official: string; //"República da Bulgária"
      common: string; //"Bulgária"
    };
    rus: {
      official: string; //"Республика Болгария"
      common: string; //"Болгария"
    };
    slk: {
      official: string; //"Bulharská republika"
      common: string; //"Bulharsko"
    };
    spa: {
      official: string; //"República de Bulgaria"
      common: string; //"Bulgaria"
    };
    swe: {
      official: string; //"Republiken Bulgarien"
      common: string; //"Bulgarien"
    };
    tur: {
      official: string; //"Bulgaristan Cumhuriyeti"
      common: string; //"Bulgaristan"
    };
    urd: {
      official: string; //"جمہوریہ بلغاریہ"
      common: string; //"بلغاریہ"
    };
    zho: {
      official: string; //"保加利亚共和国"
      common: string; //"保加利亚"
    };
  };
  latlng: number[]; //[43.0, 25.0]
  landlocked: boolean; //false
  borders: string[]; //["GRC", "MKD", "ROU", "SRB", "TUR"]
  area: number; //110879.0
  demonyms: {
    eng: {
      f: string; //"Bulgarian"
      m: string; //"Bulgarian"
    };
    fra: {
      f: string; //"Bulgare"
      m: string; //"Bulgare"
    };
  };
  flag: string; //"🇧🇬"
  maps: {
    googleMaps: string; //"https://goo.gl/maps/F5uAhDGWzc3BrHfm9"
    openStreetMaps: string; //"https://www.openstreetmap.org/relation/186382"
  };
  population: number; //6927288
  gini: {
    "2018": number; // 41.3
  };
  fifa: string; //"BUL"
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
  capitalInfo: {
    latlng: number[]; //[42.68, 23.32]
  };
  postalCode: {
    format: string; //"####"
    regex: string; //"^(\\d{4})$"
  };
}