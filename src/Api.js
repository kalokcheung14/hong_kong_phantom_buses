import axios from 'axios';

const getEta = () => {
    return axios.get('/mockData.json');
};

export default getEta;
