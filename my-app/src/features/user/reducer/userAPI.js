import axios from 'axios';
const SERVER = 'http://localhost:8080'
const headers = {
  'Content-Type' : 'application/json',
  'Authorization': 'JWT fefege..'
}
const UserJoin = param => axios.post(`${SERVER}/users`, JSON.stringify(param),{headers})
const UserFetchOne = x => axios.get(`${SERVER}/users/${x.userId}`)
const UserFetchList = () => axios.get(`${SERVER}/users`)
const UserLogin = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x),{headers})
const UserModify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
const UserRemove = x => axios.delete(`${SERVER}/users/${x.userId}`)


export default {
  UserJoin,
  UserFetchOne,
  UserFetchList,
  UserLogin,
  UserModify,
  UserRemove,
} 