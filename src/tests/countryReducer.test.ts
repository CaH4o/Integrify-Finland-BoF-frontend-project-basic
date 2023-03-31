import createStore from "./shared/mockStore";
import { fetchCountries, fetchCountry } from "../functions/asyncThunk";
import {
  searchCountries,
  addRemoveFavoriteCountry,
  addVisitedCountry,
  removeVisitedCountry,
} from "../redux/reducers/countries";
import { tCountry } from "../types/tCountry";

let store = createStore();

beforeEach(function () {
  store = createStore();
});

describe("Suite of Country reducer", function () {
  test("Country reducer / init", function () {
    expect(store.getState().countriesReducer.backUpCountries.length).toBe(0);
    expect(store.getState().countriesReducer.countries.length).toBe(0);
    expect(store.getState().countriesReducer.country.length).toBe(0);
    expect(store.getState().countriesReducer.error).toBe(false);
    expect(store.getState().countriesReducer.loading).toBe(false);
  });

  test("Country reducer / fetch All countries", async function () {
    await store.dispatch(fetchCountries());
    expect(
      store.getState().countriesReducer.backUpCountries.length
    ).toBeGreaterThan(0);
    expect(store.getState().countriesReducer.countries.length).toBeGreaterThan(
      0
    );
    expect(store.getState().countriesReducer.country.length).toBe(0);
    expect(store.getState().countriesReducer.error).toBe(false);
    expect(store.getState().countriesReducer.loading).toBe(false);
  });

  test("Country reducer / fetch Single countries", async function () {
    await store.dispatch(fetchCountry("Barbados"));
    expect(store.getState().countriesReducer.backUpCountries.length).toBe(0);
    expect(store.getState().countriesReducer.countries.length).toBe(0);
    expect(store.getState().countriesReducer.country.length).toBeGreaterThan(0);
    expect(store.getState().countriesReducer.error).toBe(false);
    expect(store.getState().countriesReducer.loading).toBe(false);
  });

  test("Country reducer / search countries", async function () {
    await store.dispatch(fetchCountries());
    const countriesNumber: number =
      store.getState().countriesReducer.countries.length;
    store.dispatch(searchCountries("Barbados"));
    expect(store.getState().countriesReducer.backUpCountries.length).toBe(
      countriesNumber
    );
    expect(store.getState().countriesReducer.countries.length).toBe(1);
  });

  test("Country reducer / add and remove favorite countries", async function () {
    await store.dispatch(fetchCountries());
    const favoritesNumber: number = store.getState().countriesReducer.favorites;
    store.dispatch(addRemoveFavoriteCountry("Barbados"));
    expect(store.getState().countriesReducer.favorites).toBe(
      favoritesNumber + 1
    );
    expect(
      store
        .getState()
        .countriesReducer.countries.reduce((n: number, c: tCountry) => {
          return n + (c.isFavorit ? 1 : 0);
        }, 0)
    ).toBe(1);
    expect(
      store
        .getState()
        .countriesReducer.backUpCountries.reduce((n: number, c: tCountry) => {
          return n + (c.isFavorit ? 1 : 0);
        }, 0)
    ).toBe(1);
    store.dispatch(addRemoveFavoriteCountry("Barbados"));
    expect(store.getState().countriesReducer.favorites).toBe(favoritesNumber);
    expect(
      store
        .getState()
        .countriesReducer.countries.reduce((n: number, c: tCountry) => {
          return n + (c.isFavorit ? 1 : 0);
        }, 0)
    ).toBe(0);
    expect(
      store
        .getState()
        .countriesReducer.backUpCountries.reduce((n: number, c: tCountry) => {
          return n + (c.isFavorit ? 1 : 0);
        }, 0)
    ).toBe(0);
  });

  test("Country reducer / add and remove visited countries", async function () {
    await store.dispatch(fetchCountries());
    const favoritesNumber: number = store.getState().countriesReducer.favorites;
    store.dispatch(addVisitedCountry("Barbados"));
    store.dispatch(addVisitedCountry("Barbados"));
    expect(store.getState().countriesReducer.visited).toBe(favoritesNumber + 1);
    expect(
      store
        .getState()
        .countriesReducer.countries.find(
          (c: tCountry) => c.name.official === "Barbados"
        )!.visited
    ).toBe(2);
    expect(
      store
        .getState()
        .countriesReducer.backUpCountries.find(
          (c: tCountry) => c.name.official === "Barbados"
        )!.visited
    ).toBe(2);
    store.dispatch(removeVisitedCountry("Barbados"));
    expect(store.getState().countriesReducer.visited).toBe(favoritesNumber + 1);
    expect(
      store
        .getState()
        .countriesReducer.countries.find(
          (c: tCountry) => c.name.official === "Barbados"
        )!.visited
    ).toBe(1);
    expect(
      store
        .getState()
        .countriesReducer.backUpCountries.find(
          (c: tCountry) => c.name.official === "Barbados"
        )!.visited
    ).toBe(1);
    store.dispatch(removeVisitedCountry("Barbados"));
    expect(store.getState().countriesReducer.visited).toBe(favoritesNumber);
    expect(
      store
        .getState()
        .countriesReducer.countries.find(
          (c: tCountry) => c.name.official === "Barbados"
        )!.visited
    ).toBe(0);
    expect(
      store
        .getState()
        .countriesReducer.backUpCountries.find(
          (c: tCountry) => c.name.official === "Barbados"
        )!.visited
    ).toBe(0);
  });
});
