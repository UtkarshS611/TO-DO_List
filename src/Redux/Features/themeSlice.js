import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  // Check localStorage for stored theme or default to light mode
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  }
  return 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  // Set initial state to the theme stored in localStorage
  initialState: { mode: getInitialTheme() },
  reducers: {
    toggleTheme: (state) => {
      // Toggle between light and dark mode
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode); // Save theme to localStorage
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      // Save theme to localStorage to persist theme on page reload
      localStorage.setItem('theme', state.mode);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;