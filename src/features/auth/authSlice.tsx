import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type User } from "@supabase/supabase-js";
import supabase from "../../services/superbase";

export interface SignUpUser {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export interface SignInUser {
  email: string;
  password: string;
}
export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async ({ fullName, email, password }: SignUpUser) => {
    const { data } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { fullName } },
    });

    return data;
  },
);

export const signInUser = createAsyncThunk(
  "auth/singIn",
  async ({ email, password }: SignInUser) => {
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return data;
  },
);

export const signOutUser = createAsyncThunk("auth/signOut", async () => {
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
    // Sign Up user
    builder.addCase(signUpUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(signUpUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Sign In user
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.user?.role;
    });
    builder.addCase(signInUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Logout user
    builder.addCase(signOutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signOutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
      state.isAuthenticated = "";
    });
    builder.addCase(signOutUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default authSlice.reducer;
