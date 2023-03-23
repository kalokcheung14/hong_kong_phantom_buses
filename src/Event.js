import { TOGGLE_LANGUAGE } from "./Store";

const toggleLanguage = () => dispatch => {
  console.log("ihiih");
  dispatch({
    type: TOGGLE_LANGUAGE
  });
};

export default toggleLanguage;
