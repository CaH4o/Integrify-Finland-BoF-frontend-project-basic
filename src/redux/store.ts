import { configureStore } from "@reduxjs/toolkit";

import countriesReducer from "./reducers/countries";
import themeModeReducer from "./reducers/themeMode";

const store = configureStore({
    reducer: {
        countriesReducer,
        themeModeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store