import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWomen = createAsyncThunk("fetchWomen", async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing",
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

export const womenSlice = createSlice({
  name: "womensClothing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWomen.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWomen.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchWomen.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default womenSlice.reducer;
