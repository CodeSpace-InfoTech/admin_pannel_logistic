import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

const API_URL = '/loads';

// Get all loads
// Get all loads
export const getLoads = createAsyncThunk(
  'loads/getLoads',
  async ({ search = '', page = 1, limit = 10, status = '' } = {}) => {
    const queryParams = new URLSearchParams({
      ...(search && { search }),
      ...(status && { status }),
      page: page.toString(),
      limit: limit.toString()
    });
    
    const response = await api.get(`${API_URL}?${queryParams}`);
    if(response.data.success) {
      console.log('response.data', response.data.data)
      return response.data.data;
    }
  }
);


export const getLoadDetails = createAsyncThunk(
  'loads/getLoadDetails',
  async (id) => {
    const response = await api.get(`${API_URL}/${id}`);
    if(response.data.success) {
      
      return response.data.data;
    }
  }
)
