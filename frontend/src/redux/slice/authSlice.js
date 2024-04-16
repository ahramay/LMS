// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const storedAuth = localStorage.getItem('admin');
let storedToken = null;
let storedStatus = null;
let UserInfo = null;

if (storedAuth) {
  try {
    const parsedAuth = JSON.parse(storedAuth);
    const parsedToken =JSON.parse(parsedAuth?.auth);
    storedToken = parsedToken?.session?.token;
    storedStatus =parsedToken?.session?.signedIn;
    UserInfo= parsedToken?.user;

  } catch (error) {
    console.error('Error parsing stored auth data:', error);
  }
} 

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      status: storedStatus,
      token: storedToken,
      isAuthenticated: !!storedToken,
      UserInfo:UserInfo
    }
  },
  reducers: {
    logout(state) {
      state.user = {
        status: null,
        token: null,
        isAuthenticated: false,
      };
  
      localStorage.removeItem('admin');
    },
  },
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
