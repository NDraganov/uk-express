import { createSlice } from "@reduxjs/toolkit";

interface Search {
  isVisible: boolean;
}

const initialState: Search = {
  isVisible: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    showSearchModal(state) {
      state.isVisible = true;
    },
    closeSearchModal(state) {
      state.isVisible = false;
    },
  },
});

export const { showSearchModal, closeSearchModal } = searchSlice.actions;
export default searchSlice.reducer;
