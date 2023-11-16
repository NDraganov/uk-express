import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMens = createAsyncThunk("fetchMens", async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing",
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

export const menSlice = createSlice({
  name: "mensClothing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMens.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMens.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchMens.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default menSlice.reducer;
