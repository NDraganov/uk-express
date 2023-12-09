import { createSlice } from "@reduxjs/toolkit";

interface News {
  isOpen: boolean;
}

const initialState: News = {
  isOpen: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    openModalTimer(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModalTimer, closeModal } = newsSlice.actions;
export default newsSlice.reducer;
