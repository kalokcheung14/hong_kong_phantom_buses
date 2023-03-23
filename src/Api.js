import { etaGot } from "./EtaSlice";
import mockData from "./MockData";

const getEta = () => async dispatch => {
    try {
        // const result = await axios.get("http://localhost:8082/eta?coordinate=22.370503,114.130902");
        dispatch(etaGot({mockData}));
    } catch (e) {
        console.log(e);
    }
};

export default getEta;
