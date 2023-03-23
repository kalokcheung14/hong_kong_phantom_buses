import { configureStore } from "@reduxjs/toolkit";

const GET_ETA = 'GET_ETA';
const GET_ETA_ERROR = 'GET_ETA_ERROR';

const initState = {
    data: [],
    loading: true
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ETA:
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

const store = configureStore({reducer: reducer});

export { store, GET_ETA, GET_ETA_ERROR };
