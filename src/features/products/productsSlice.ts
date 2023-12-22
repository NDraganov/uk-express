import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isReviews: boolean;
  currentPage: number;
}

const initialState: InitialState = {
  isReviews: false,
  currentPage: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    openReviews(state) {
      state.isReviews = true;
    },
    closeReviews(state) {
      state.isReviews = false;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { openReviews, closeReviews, setCurrentPage } =
  productsSlice.actions;
export default productsSlice.reducer;
