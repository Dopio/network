import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4fd71fa5-e02d-4296-85e7-5b9643aecdf4'
    },
});

const profileAPI = {

    getStatus(userId = 2) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },


    getUserId(userId = 2) {
        return instance.get(`profile/${userId}`, {});
    },
};

export default profileAPI;