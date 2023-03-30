import createStore from "./shared/mockStore";
import { fetchCountries, fetchCountry } from "../functions/asyncThunk";

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
});
