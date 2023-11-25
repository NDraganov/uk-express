import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../services/superbase";
export interface LoginUser {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginUser) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    console.log(data);
    return data;
  },
);

export const registerUser = createAsyncThunk("auth/register", async () => {});

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
    // Login Users
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    // Register Users
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
