import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./reducers/countries";
import themeModeReducer from "./reducers/themeMode";
import searchReducer from "./reducers/search";

const store = configureStore({
    reducer: {
        countriesReducer,
        themeModeReducer,
        searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store