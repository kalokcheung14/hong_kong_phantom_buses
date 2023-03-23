import { configureStore } from "@reduxjs/toolkit";
import etaReducer from './EtaSlice';
import langReducer from './LangSlice';

const store = configureStore({
  reducer: {
    eta: etaReducer,
    lang: langReducer
  }
});

export default store;
