import { createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { toast } from 'react-toastify';

const API_URL = '/admin';

// Login admin
export const Login = createAsyncThunk(
  'admin/login',
  async (credentials) => {
    const response = await api.post(`${API_URL}/login`, credentials);
    if(response.data.success) {
      localStorage.setItem('token', response.data.data.token);
      toast.success('Admin logged in successfully');
      return response.data.data;
    }
  }
);

export const GetProfile = createAsyncThunk(
  'admin/getCurrentAdmin',
  async () => {
    const response = await api.get(`${API_URL}/me`);
    if(response.data.success) {
      return response.data.data.admin;
    }
  }
);

export const ForgetPassword = createAsyncThunk(
  'admin/forgetPassword',
  async (email) => {
    const response = await api.post(`${API_URL}/password/forgot`, email);
    if(response.data.success) {
      toast.success('Admin password reset email sent');
      return response.data.data;
    }
  }
)

export const ResetPassword = createAsyncThunk(
  'admin/resetPassword',
  async (data) => {
    const response = await api.post(`${API_URL}/reset-password`, data);
    if(response.data.success) {
      toast.success('Admin password reset successfully');
      return response.data.data;
    }
  }
)

export const UpdateProfile = createAsyncThunk(
  'admin/updateProfile',
  async (data) => {
    const response = await api.put(`${API_URL}/me/update`, data);
    if(response.data.success) {
      toast.success('Admin profile updated successfully');
      return response.data.data;
    }
  }
)

export const UpdateChangePassword = createAsyncThunk(
  'admin/updateChangePassword',
  async (data) => {
    const response = await api.put(`${API_URL}/password/update`, data);
    if(response.data.success) {
      toast.success('Admin password updated successfully');
      return response.data.data;
    }
  }
)