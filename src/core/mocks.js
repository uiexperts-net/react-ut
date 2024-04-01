import axios from 'axios';
import fs from 'fs';

export const fetchUserList = ()=>{
    return axios.get('/users').then(response=>response.data);
}


export const processUserList = (userList, formatUser) => {
    const formattedUsers = userList.map(user => formatUser(user));
    return formattedUsers;
}

export const executeTimer = (callback)=>{
    setTimeout(() => {
      callback && callback();
    }, 1000);
  }

export const readFileData = (readFileCallback)=>{
fs.readFile('test.html', readFileCallback);;
}  