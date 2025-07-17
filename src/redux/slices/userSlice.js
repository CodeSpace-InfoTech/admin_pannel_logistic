import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, getUsers, updateUser } from "../user";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    totalUsers: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get users
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data;
        state.totalUsers = action.payload.total;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Create user
      .addCase(createUser.fulfilled, (state, action) => {
        console.log('Creating new user:', action.payload);
        state.users.unshift(action.payload);
      })
      // Update user
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user._id === action.payload._id
        );
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      // Delete user
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(
          (user) => user._id !== action.payload
        );
      });
  },
});

export default userSlice.reducer;
