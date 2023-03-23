import { GET_ETA, GET_ETA_ERROR } from "./Store";
import mockData from "./MockData";

const getEta = () => async dispatch => {
    try {
        // const result = await axios.get("http://localhost:8082/eta?coordinate=22.370503,114.130902");
        dispatch({
            type: GET_ETA,
            payload: mockData
        });
    } catch (e) {
        console.log(e);
        dispatch({
            type: GET_ETA_ERROR,
            payload: e.payload
        });
    }
};

export default getEta;
