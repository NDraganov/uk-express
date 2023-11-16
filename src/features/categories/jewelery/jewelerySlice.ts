import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJewelery = createAsyncThunk("fetchJewelery", async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
  );
  const data = await res?.json();
  return data;
});

interface InitialStateProps {
  isLoading: boolean;
  data: [];
  isError: boolean;
}

const initialState: InitialStateProps = {
  isLoading: false,
  data: [],
  isError: false,
};

export const jewelerySlice = createSlice({
  name: "jewelery",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchJewelery.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchJewelery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchJewelery.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default jewelerySlice.reducer;
