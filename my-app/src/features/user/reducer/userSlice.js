import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const UserJoinPage = async(x) => {
    const res = await userAPI.UserJoin(x)
    return res.data
}
const UserFetchOnePage = async(x) => {
  const res = await userAPI.UserFetchOne(x)
  return res.data
}
const UserFetchListPage = async() => {
  const res = await userAPI.UserFetchList()
  return res.data
}
const UserLoginPage = async(x) => {
  const res = await userAPI.UserLogin(x)
  return res.data
}
const UserModifyPage = async(x) => {
  const res = await userAPI.UserModify(x)
  return res.data
}
const UserRemove = async(x) => {
  const res = await userAPI.UserRemove(x)
  return res.data
}
export const joinPage = createAsyncThunk('users/join', UserJoinPage)
export const fetchOnePage = createAsyncThunk('users/one', UserFetchOnePage)
export const fetchListPage = createAsyncThunk('users/list', UserFetchListPage)
export const loginPage = createAsyncThunk('users/login', UserLoginPage)
export const modifyPage = createAsyncThunk('users/modify', UserModifyPage)
export const removePage = createAsyncThunk('users/remove', UserRemovePage)

export default userSlice.reducer;