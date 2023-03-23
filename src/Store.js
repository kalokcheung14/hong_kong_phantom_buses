import { configureStore } from "@reduxjs/toolkit";

const GET_ETA = 'GET_ETA';
const GET_ETA_ERROR = 'GET_ETA_ERROR';
const mockData = [
    {
        route: "278X",
        destEn: "TSUEN WAN (NINA TOWER)",
        stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
        etaDetails: [
            {
                time: 2,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 8,
                remarkEn: "Scheduled Bus",
                remarkTc: ""
            },
            {
                time: 20,
                remarkEn: "Scheduled Bus",
                remarkTc: ""
            }
        ]
    },
    {
        route: "235",
        destEn: "TSUEN WAN (CIRCULAR)",
        stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
        etaDetails: [
            {
                time: 2,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 8,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 20,
                remarkEn: "",
                remarkTc: ""
            }
        ]
    },
    {
        route: "48X",
        destEn: "TSUEN WAN (BAYVIEW GARDEN)",
        stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
        etaDetails: [
            {
                time: 2,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 8,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 20,
                remarkEn: "",
                remarkTc: ""
            }
        ]
    },
    {
        route: "290X",
        destEn: "TSUEN WAN WEST STATION",
        stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
        etaDetails: [
            {
                time: 2,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 8,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 15,
                remarkEn: "",
                remarkTc: ""
            }
        ]
    },
    {
        route: "290",
        destEn: "TSUEN WAN WEST STATION",
        stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
        etaDetails: [
            {
                time: 2,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 8,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 20,
                remarkEn: "",
                remarkTc: ""
            }
        ]
    },
    {
        route: "73X",
        destEn: "TSUEN WAN (NINA TOWER)",
        stopNameEn: "KIN CHUEN STREET KWAI CHUNG",
        etaDetails: [
            {
                time: 2,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 8,
                remarkEn: "",
                remarkTc: ""
            },
            {
                time: 20,
                remarkEn: "",
                remarkTc: ""
            }
        ]
    }
];

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

export { store, GET_ETA, GET_ETA_ERROR, mockData };