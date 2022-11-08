export type tRegion =
  | "Europe"
  | "Americas"
  | "Asia"
  | "Africa"
  | "Antarctic"
  | "Oceania";

export type tSubregion =
  | "Eastern Africa"
  | "Middle Africa"
  | "Northern Africa"
  | "Southern Africa"
  | "Western Africa"
  | "Caribbean"
  | "Central America"
  | "North America"
  | "South America"
  | "Central Asia"
  | "Eastern Asia"
  | "South-Eastern Asia"
  | "Southern Asia"
  | "Western Asia"
  | "Central Europe"
  | "Eastern Europe"
  | "Northern Europe"
  | "Southeast Europe"
  | "Southern Europe"
  | "Western Europe"
  | "Australia and New Zealand"
  | "Melanesia"
  | "Micronesia"
  | "Polynesia"
  | "undefined";

export const mapRegionSubregion= new Map<tRegion,tSubregion> ();
mapRegionSubregion.set("Africa", "Eastern Africa");
mapRegionSubregion.set("Africa", "Middle Africa");
mapRegionSubregion.set("Africa", "Northern Africa");
mapRegionSubregion.set("Africa", "Southern Africa");
mapRegionSubregion.set("Africa", "Western Africa");
mapRegionSubregion.set("Americas", "Caribbean");
mapRegionSubregion.set("Americas", "Central America");
mapRegionSubregion.set("Americas", "North America");
mapRegionSubregion.set("Americas", "South America");
mapRegionSubregion.set("Antarctic", "undefined");
mapRegionSubregion.set("Asia", "Central Asia");
mapRegionSubregion.set("Asia", "Eastern Asia");
mapRegionSubregion.set("Asia", "South-Eastern Asia");
mapRegionSubregion.set("Asia", "Southern Asia");
mapRegionSubregion.set("Asia", "Western Asia");
mapRegionSubregion.set("Europe", "Central Europe");
mapRegionSubregion.set("Europe", "Eastern Europe");
mapRegionSubregion.set("Europe", "Northern Europe");
mapRegionSubregion.set("Europe", "Southeast Europe");
mapRegionSubregion.set("Europe", "Southern Europe");
mapRegionSubregion.set("Europe", "Western Europe");
mapRegionSubregion.set("Oceania", "Australia and New Zealand");
mapRegionSubregion.set("Oceania", "Melanesia");
mapRegionSubregion.set("Oceania", "Micronesia");
mapRegionSubregion.set("Oceania", "Polynesia");
