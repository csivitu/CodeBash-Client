import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://code-bash-backend.herokuapp.com/',
    responseType: 'json',
});