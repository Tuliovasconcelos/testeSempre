import axios from 'axios';

const ApiCall = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default ApiCall;
