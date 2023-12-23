import { createSlice } from "@reduxjs/toolkit";

interface Search {
  isVisible: boolean;
  isActive: boolean;
  input: string;
}

const initialState: Search = {
  isVisible: false,
  isActive: false,
  input: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearchModal(state) {
      state.isVisible = true;
    },
    closeSearchModal(state) {
      state.input = "";
      state.isVisible = false;
      state.isActive = false;
    },
    showSearchResults(state) {
      state.isActive = true;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
  },
});

export const {
  showSearchModal,
  closeSearchModal,
  showSearchResults,
  setInput,
} = searchSlice.actions;
export default searchSlice.reducer;
