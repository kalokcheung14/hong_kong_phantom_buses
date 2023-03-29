import axios from 'axios';

const getMockEta = () => {
    return axios.get('/mockData.json');
};

const getEta = () => {
    return axios.get('http://localhost:8082/eta?coordinate=22.370503, 114.130902');
}

export { getEta, getMockEta };
