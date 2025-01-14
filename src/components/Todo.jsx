import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Features/authSlice';
import ThemeBtn from './ThemeBtn';


const Todo = () => {

  const mode = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className={`${
      mode === "dark" ? "bg-[#242424] text-[#f5f5f5]" : "bg-white text-black"
    } flex justify-center items-center h-screen bg-gray-200`}>
      <div className="bg-white p-8 rounded-lg shadow-md w-80 text-center">
        <h1 className="text-2xl mb-4">Welcome to your TODO Page</h1>
        {/* Your TODO page content here */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Todo;
