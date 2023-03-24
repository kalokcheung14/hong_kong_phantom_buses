import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import getEta from "./Api";

const initState = {
    data: [],
    loading: true
};

// Get ETA
export const fetchEta = createAsyncThunk("getEta", async () => {
  const response = await getEta();
  console.log(response);
  return response.data.busRoutes;
});

const etaSlice = createSlice({
  name: 'eta',
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchEta.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchEta.fulfilled, (state, { payload }) => {
          console.log(payload);
          state.data = payload;
          state.loading = false;
        })
        .addCase(fetchEta.rejected, (state) => {
          state.loading = false;
        })
  }
});

export default etaSlice.reducer;
