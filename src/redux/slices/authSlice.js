import { createSlice } from '@reduxjs/toolkit'; // 1. slice 생성
import Cookies from 'js-cookie'

const initialState = {
  authData:Cookies.get('authData')?
  
  
  
  JSON.parse(Cookies.get('authData')) : null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      // UPDATE 상태값 변경
      state.authData = action.payload.authData;
      
        Cookies.set('authData', JSON.stringify(action.payload.authData),{
            expires:1, // 1일 쿠키 유효기간
        });
    },
    logout: (state, action) => {
      // 상태값 비움
      state.authData = null;
      

      Cookies.remove('authData')
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
