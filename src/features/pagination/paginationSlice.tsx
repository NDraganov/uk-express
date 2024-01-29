import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Pagination {
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
}

const initialState: Pagination = {
  itemsPerPage: 21,
  currentPage: 1,
  totalPages: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    getTotalPages(state, action) {
      state.totalPages = Math.ceil(action.payload / state.itemsPerPage);
    },
    prevPage(state) {
      if (state.currentPage !== 1) {
        state.currentPage--;
      }
    },
    paginate(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    nextPage(state) {
      if (state.currentPage !== state.totalPages) {
        state.currentPage++;
      }
    },
  },
});

export const { getTotalPages, prevPage, paginate, nextPage } =
  paginationSlice.actions;
export default paginationSlice.reducer;
