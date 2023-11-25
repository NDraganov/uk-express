import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterUserProps {
  email: string;
  password: number;
}

const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password }: RegisterUserProps, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios.post("https://fakestoreapi.com/users", { email, password }, config);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      if (message) {
        return rejectWithValue(message);
      }
    }
  },
);

interface InitialStateProps {
  isLoading: boolean;
  isError: boolean;
  success: boolean;
}

const initialState: InitialStateProps = {
  isLoading: false,
  isError: false,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
