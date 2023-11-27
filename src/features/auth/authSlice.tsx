import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type User } from "@supabase/supabase-js";
import supabase from "../../services/superbase";

export const registerUser = createAsyncThunk("auth/register", async () => {});
export interface LoginUser {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginUser) => {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return data;
  },
);

interface InitialStateProps {
  isLoading: boolean;
  isError: boolean;
  success: boolean;
  isAuthenticated: string | undefined;
  user: User | null;
}

const initialState: InitialStateProps = {
  isLoading: false,
  isError: false,
  success: false,
  isAuthenticated: "",
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Register users
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
    // Login users
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.user?.role;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
