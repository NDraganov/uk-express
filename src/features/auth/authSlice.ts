import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../services/superbase";
import { type User } from "@supabase/supabase-js";
import { type SignInUser, type SignUpUser, type UpdateUser } from "./authTypes";

export const signUpUser = createAsyncThunk(
  "auth/signUp",
  async ({
    firstName,
    lastName,
    email,
    password,
    code,
    phone,
    address,
  }: SignUpUser) => {
    const { data } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { firstName, lastName, address, code, phone } },
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

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({
    firstName,
    lastName,
    email,
    password,
    address,
    phone,
  }: UpdateUser) => {
    const { data } = await supabase.auth.updateUser({
      email: email,
      password: password,
      data: {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phone: phone,
      },
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
  fullName: string;
}

const initialState: InitialStateProps = {
  isLoading: false,
  isError: false,
  success: false,
  isAuthenticated: "",
  user: null,
  fullName: "",
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
      state.fullName =
        action.payload.user?.user_metadata.firstName +
        " " +
        action.payload.user?.user_metadata.lastName;
    });
    builder.addCase(signInUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Update user
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.isLoading = false;
      state.success = true;
    });
    builder.addCase(updateUser.rejected, (state) => {
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
