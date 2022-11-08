import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

interface themeMode {
  mode: PaletteMode
}

const initialState = {mode: "light"} as themeMode;

const themeModeSlicer = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggleMode: (state: themeMode) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

const themeModeReducer = themeModeSlicer.reducer;
export const { toggleMode } = themeModeSlicer.actions;
export default themeModeReducer;
