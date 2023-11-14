import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res?.json();
    return data;
  },
);
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

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default allProductsSlice.reducer;
