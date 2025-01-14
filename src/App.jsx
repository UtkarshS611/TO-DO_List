import React from 'react';
import { useSelector } from 'react-redux';
import ThemeBtn from './components/ThemeBtn';

const App = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={`${mode === 'dark' ? 'bg-[#242424] text-[#f5f5f5]' : 'bg-white text-black'}`}>
      <ThemeBtn/>
      heyyy
    </div>
  );
};

export default App;
