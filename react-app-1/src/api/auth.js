import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4fd71fa5-e02d-4296-85e7-5b9643aecdf4'
    },
    withCredentials: true,
});

const authAPI = {

    getMe() {
        return instance.get(`auth/me`, {
        })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },

    logout() {
        return instance.delete(`auth/login`);
    },
};

export default authAPI;