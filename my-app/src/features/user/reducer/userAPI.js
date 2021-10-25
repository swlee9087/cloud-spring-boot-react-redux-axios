import axios from 'axios';
const SERVER = 'http://localhost:8080'
const headers = {
  'Content-Type' : 'application/json',
  'Authorization': 'JWT fefege..'
}
const userJoin = param => axios.post(`${SERVER}/users`, JSON.stringify(param),{headers})
const userFetchOne = x => axios.get(`${SERVER}/users/${x.userId}`)
const userFetchList = () => axios.get(`${SERVER}/users`)
const userLogin = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x),{headers})
const UserModify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
const userRemove = x => axios.delete(`${SERVER}/users/${x.userId}`)


export default {
  userJoin,
  userFetchOne,
  userFetchList,
  userLogin,
  UserModify,
  userRemove,
}