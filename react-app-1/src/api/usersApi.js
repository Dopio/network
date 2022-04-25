import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4fd71fa5-e02d-4296-85e7-5b9643aecdf4'
    },
});

const usersAPI = {
    requestUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => response.data);
    },

    unFollowAPI(usersId) {
        return (
            
        instance.delete(`follow/${usersId}`, {
        }).then(response => response.data))
    },

    followAPI(usersId) {
        return instance.post(`follow/${usersId}`, {}, {
        }).then(response => response.data);
    },
};

export default usersAPI;