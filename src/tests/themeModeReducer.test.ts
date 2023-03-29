import createStore from "./shared/mockStore";
import { toggleMode } from "../redux/reducers/themeMode";

let store = createStore();

beforeEach(function () {
  store = createStore();
});

describe("Suite of Theme mode reducer", function () {
  test("Theme mode reducer / initial state", function () {
    expect(store.getState().themeModeReducer.mode).toBe("light");
  });

  test("Theme mode reducer / initial state", function () {
    store.dispatch(toggleMode());
    expect(store.getState().themeModeReducer.mode).toBe("dark");
  });
});
