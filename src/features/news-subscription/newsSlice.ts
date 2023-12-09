import { createSlice } from "@reduxjs/toolkit";

interface News {
  isOpen: boolean;
  overflow: string;
}

const initialState: News = {
  isOpen: false,
  overflow: document.body.style.overflow,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    openModalTimer(state) {
      state.isOpen = true;
      state.overflow = document.body.style.overflow = "hidden";
    },
    closeModal(state) {
      state.isOpen = false;
      state.overflow = document.body.style.overflow = "unset";
    },
  },
});

export const { openModalTimer, closeModal } = newsSlice.actions;
export default newsSlice.reducer;
