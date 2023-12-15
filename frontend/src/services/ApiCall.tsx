import axios from 'axios';

const ApiCall = axios.create({
    baseURL: 'http://localhost:3333',
});

export default ApiCall;
