import { createSlice } from "@reduxjs/toolkit";
import { ForgetPassword, GetProfile, Login, ResetPassword, UpdateChangePassword , UpdateProfile } from "../admin";

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admin: null,
    loading: false,
    error: null,
    isAuthenticated: false,
    resetPasswordToken: null,
    resetPasswordExpires: null
  },
  reducers: {
    logout: (state) => {
      state.admin = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
        state.isAuthenticated = true;
      })
      .addCase(Login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Forgot Password
      .addCase(ForgetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(ForgetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(ForgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Reset Password
      .addCase(ResetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(ResetPassword.fulfilled, (state) => {
        state.loading = false;
        state.resetPasswordToken = null;
        state.resetPasswordExpires = null;
      })
      .addCase(ResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Get Profile
      .addCase(GetProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(GetProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Update Profile
      .addCase(UpdateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(UpdateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Update Change Password
      .addCase(UpdateChangePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(UpdateChangePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(UpdateChangePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, clearError } = adminSlice.actions;
export default adminSlice.reducer;
