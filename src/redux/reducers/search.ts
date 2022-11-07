import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = "";

const searchSlicer = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    setSearch: (state:string, action: PayloadAction<string>) => {
      return state = action.payload;
    },
  },
});

const searchReducer = searchSlicer.reducer;
export const { setSearch } = searchSlicer.actions;
export default searchReducer;
