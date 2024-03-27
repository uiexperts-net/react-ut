import axios from 'axios';

export const fetchUserList = ()=>{
    return axios.get('/users').then(response=>response.data);
}


export const processUserList = (userList, formatUser) => {
    const formattedUsers = userList.map(user => formatUser(user));
    return formattedUsers;
}