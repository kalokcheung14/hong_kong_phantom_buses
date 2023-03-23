import { createSlice } from "@reduxjs/toolkit";

const GET_ETA = 'GET_ETA';
const GET_ETA_ERROR = 'GET_ETA_ERROR';
const TOGGLE_LANGUAGE = 'TOGGLE_LANGUAGE';

const initState = {
    data: [],
    loading: true
};

const etaSlice = createSlice({
  name: 'eta',
  initialState: initState,
  reducers: {
    etaGot(state, action) {
      const { mockData } = action.payload;
      console.log(mockData);
      state.data = mockData;
      state.loading = false;
    }
  }
});

export const { etaGot } = etaSlice.actions;

export default etaSlice.reducer;
