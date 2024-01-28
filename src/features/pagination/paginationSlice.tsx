import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Pagination {
  itemsPerPage: number;
  currentPage: number;
}

const initialState: Pagination = {
  itemsPerPage: 21,
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    prevPage(state) {
      if (state.currentPage !== 1) {
        state.currentPage--;
      }
    },
    paginate(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    nextPage(state) {
      if (state.currentPage !== 5) {
        state.currentPage++;
      }
    },
  },
});

export const { prevPage, paginate, nextPage } = paginationSlice.actions;
export default paginationSlice.reducer;
