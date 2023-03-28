import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "../../redux/reducers/countries";
import themeModeReducer from "../../redux/reducers/themeMode";

export default function createStore() {
  const store = configureStore({
    reducer: {
      countriesReducer,
      themeModeReducer,
    },
  });
}
