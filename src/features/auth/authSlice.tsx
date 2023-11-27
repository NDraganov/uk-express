import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type User } from "@supabase/supabase-js";
import supabase from "../../services/superbase";

export interface SignupUser {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export interface LoginUser {
  email: string;
  password: string;
}
export const signupUser = createAsyncThunk(
  "auth/signup",
  async ({ fullName, email, password }: SignupUser) => {
    const { data } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { fullName } },
    });

    return data;
  },
);

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

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await supabase.auth.signOut();
});

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
    // Register user
    builder.addCase(signupUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signupUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(signupUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Login user
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

    // Logout user
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
      state.isAuthenticated = "";
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
