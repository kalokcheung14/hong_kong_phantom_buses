import axios from 'axios';

const getMockEta = () => {
    return axios.get('/mockData.json');
};

const getEta = () => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;
    return axios.get(`${apiUrl}/eta?coordinate=22.370503,114.130902`);
}

export { getEta, getMockEta };
