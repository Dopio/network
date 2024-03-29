import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4fd71fa5-e02d-4296-85e7-5b9643aecdf4'
    },
});

const profileAPI = {

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },


    getUserId(userId) {
        return instance.get(`profile/${userId}`, {});
    },

    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile);
    },
};

export default profileAPI;