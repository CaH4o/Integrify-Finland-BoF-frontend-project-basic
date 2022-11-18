import { tCurrency, tLanguage } from "../types/tCountry";

export function showLanguages(valuesLanguages: tLanguage): string {
  return show(Object.values(valuesLanguages));
}

export function showCurrencies(valuesCurrences: tCurrency): string {
  return show(Object.values(valuesCurrences).map((c) => c.name));
}

function show(stringArray: string[]): string {
  let res: string = "";
  for (let i: number = 0; i < stringArray.length; i++) {
    if (i > 0) {
      if (i + 1 === stringArray.length) {
        res += " and " + stringArray[i];
      } else {
        res += ", " + stringArray[i];
      }
    } else {
      res += stringArray[i];
    }
  }
  return res;
}
