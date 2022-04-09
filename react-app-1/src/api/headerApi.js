import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const getMe = () => {
    return instance.get(`/auth/me`, {
        withCredentials: true,
    }).then(response => response.data);
};