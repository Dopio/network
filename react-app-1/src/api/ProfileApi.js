import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const getProfile = (userId) => {
    return instance.get(`/profile/${userId}`, {
    }).then(responce => responce.data);
};