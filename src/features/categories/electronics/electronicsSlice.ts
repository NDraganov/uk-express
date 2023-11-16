import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchElectronics = createAsyncThunk(
  "fetchElectronics",
  async () => {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/electronics",
    );
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

export const electronicsSlice = createSlice({
  name: "electronics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchElectronics.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchElectronics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchElectronics.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default electronicsSlice.reducer;
