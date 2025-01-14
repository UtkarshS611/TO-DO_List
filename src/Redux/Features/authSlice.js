import { createSlice } from '@reduxjs/toolkit';

const getInitialAuthState = () => {
  if (typeof window !== 'undefined') {
    const savedAuth = localStorage.getItem('auth');
    return savedAuth === 'true'; 
  }
  // default authentication value false
  return false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: getInitialAuthState() },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem('auth', 'true'); // Save the state to localStorage
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem('auth', 'false'); // Remove the state from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
