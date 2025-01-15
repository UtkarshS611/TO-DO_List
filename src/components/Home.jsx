import React from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-6 px-10 md:px-44 lg:px-64">
      <h1 className='text-3xl lg:text-5xl font-bold text-center'>Welcome to the todo list</h1>
      <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae at, cum placeat autem modi corporis amet architecto commodi nisi eius delectus possimus sed quis dolore? Quidem accusamus sapiente porro amet.</p>
      <button className='bg-slate-900 px-6 py-2 rounded-md text-white' onClick={handleLoginRedirect}>
        Login
      </button>
    </section>
  );
};

export default Home;
