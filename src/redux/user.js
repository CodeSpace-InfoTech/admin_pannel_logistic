import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';
import { toast } from 'react-toastify';

const API_URL = '/user';

// Get all users
export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (params = {}) => {
    const {
      page = 1,
      limit = 10,
     
    } = params;

    const queryParams = new URLSearchParams({
      page,
      limit,
   
    });

    const response = await api.get(`${API_URL}?${queryParams}`);
    console.log('response.data', response.data)
    if(response.data.success) {
      return response.data.data;
    }
  }
);

// Create new user
export const createUser = createAsyncThunk(
  'users/createUser',
  async (userData) => {
    const response = await api.post(API_URL, userData);
    if(response.data.success){
       
      toast.success('User created successfully');
      return response.data.data.user;
    }
  }
);

// Update user
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, userData }) => {
    const response = await api.put(`${API_URL}/${id}`, userData);
    if(response.data.success) {
      toast.success('User updated successfully');
      return response.data.data.user;
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    if(response.data.success){
      toast.success('User deleted successfully');
      return id;
    }
  }
);


export const forgetPassword = createAsyncThunk(
  'users/forgetPassword',
  async (email) => {
    const response = await api.post(`${API_URL}/forget-password`, email);
    if(response.data.success){
      toast.success('Password reset link sent successfully');
      return response.data.data.user;
    }
  }
);