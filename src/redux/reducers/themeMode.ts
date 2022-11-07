import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: "light" | "dark" = "light";

const themeModeSlicer = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggleMode: (state: "light" | "dark") => {
      console.log("before, ", state)
      state = state === "light" ? "dark" : "light";
      console.log("after, ", state)
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
