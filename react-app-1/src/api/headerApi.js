import * as axios from 'axios';

const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

export const getMe = () => {
    return axios.get(baseUrl + `/auth/me`, {
        withCredentials: true,
    }).then(response => response.data);
};