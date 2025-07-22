import { createSlice } from "@reduxjs/toolkit";
import {  getLoadDetails, getLoads } from "../loads";

const loadSlice = createSlice({
  name: 'loads',
  initialState: {
 loads: [],
    LoadDetails: {},
    totalLoads:0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(getLoads.pending, (state) => {
        state.loading = true;
      })
     .addCase(getLoads.fulfilled, (state, action) => {
        state.loading = false;
        state.loads = action.payload.data;
        state.totalLoads = action.payload.total;
      })
      .addCase(getLoads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }).addCase(getLoadDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoadDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.LoadDetails = action.payload;
      }).addCase(getLoadDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
     
     
  
     
    
  },
});

export default loadSlice.reducer;
