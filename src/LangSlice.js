import { createSlice } from "@reduxjs/toolkit";
import { translateStrings } from "./Translation";
import { stringList } from "./Strings";

const LANGUAGE_EN = "en";
const LANGUAGE_ZH = "tc";

const initState = {
    language: LANGUAGE_EN,
    strings: translateStrings(stringList, LANGUAGE_EN)
};

const langSlice = createSlice({
  name: 'lang',
  initialState: initState,
  reducers: {
    languageToggled(state) {
      if (state.language === LANGUAGE_EN) {
        state.language = LANGUAGE_ZH;
        state.strings =  translateStrings(stringList, LANGUAGE_ZH);
      } else {
        state.language = LANGUAGE_EN;
        state.strings =  translateStrings(stringList, LANGUAGE_EN);
      }
    }
  }
});

export const { languageToggled } = langSlice.actions;

export { LANGUAGE_EN };

export default langSlice.reducer;
