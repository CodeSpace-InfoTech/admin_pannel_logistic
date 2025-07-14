import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

const API_URL = '/customers';

// Get all customers
export const getCustomers = createAsyncThunk(
  'customers/getCustomers',
  async () => {
    const response = await api.get(API_URL);
console.log('response', response.data.data.data)
    if(response.data.success) {
        return response.data.data.data;
    }
  }
);

// Create new customer
export const createCustomer = createAsyncThunk(
  'customers/createCustomer',
  async (customerData) => {
    const response = await api.post(API_URL, customerData);
    console.log('response.data', response.data)
    if(response.data.success){
        return response.data.data;
    }
  }
);

// Update customer
export const updateCustomer = createAsyncThunk(
  'customers/updateCustomer',
  async ({ id, customerData }) => {
    console.log('customerData', customerData)
    const response = await api.put(`${API_URL}/${id}`, customerData);
    console.log('response', response.data)
    if(response.data.success) {
        return response.data.data;
    }
  }
);

// Delete customer
export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    console.log('response.data', response.data)
    if(response.data.success){
        return id;
    }
  }
);
