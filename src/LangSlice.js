import { createSlice } from "@reduxjs/toolkit";

const LANGUAGE_EN = "EN";
const LANGUAGE_ZH = "ZH";

const initState = {
    language: LANGUAGE_EN
};

const langSlice = createSlice({
  name: 'lang',
  initialState: initState,
  reducers: {
    languageToggled(state, action) {
      state.language = (state.language == LANGUAGE_EN)? LANGUAGE_ZH: LANGUAGE_EN;
    }
  }
});

export const { languageToggled } = langSlice.actions;

export { LANGUAGE_EN };

export default langSlice.reducer;
