import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: "light" | "dark" = "light";

const themeModeSlicer = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggleMode: (state: "light" | "dark") => {
      state = state === "light" ? "dark" : "light";
    },
    setMode: (
      state: "light" | "dark",
      action: PayloadAction<"light" | "dark">
    ) => {
      state = action.payload;
    },
  },
});

const themeModeReducer = themeModeSlicer.reducer;
export const { toggleMode, setMode } = themeModeSlicer.actions;
export default themeModeReducer;
