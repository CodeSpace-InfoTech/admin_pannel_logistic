import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

const API_URL = '/loads';

// Get all loads
export const getLoads = createAsyncThunk(
  'loads/getLoads',
  async () => {
    const response = await api.get(API_URL);
    if(response.data.success) {
      return response.data.data.data;
    }
  }
);

// Create new load
export const createLoad = createAsyncThunk(
  'loads/createLoad', 
  async (loadData) => {
    const response = await api.post(API_URL, loadData);
    if(response.data.success) {
      return response.data.data;
    }
  }
);

// Update load
export const updateLoad = createAsyncThunk(
  'loads/updateLoad',
  async ({ id, loadData }) => {
    const response = await api.put(`${API_URL}/${id}`, loadData);
    if(response.data.success) {
      return response.data.data;
    }
  }
);

// Delete load
export const deleteLoad = createAsyncThunk(
  'loads/deleteLoad',
  async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    if(response.data.success) {
      return id;
    }
  }
);
