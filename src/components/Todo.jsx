import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Features/authSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Todo = () => {
  const mode = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <section
      className={`${
        mode === "dark" ? "bg-[#242424] text-[#f5f5f5]" : "bg-white text-black"
      } mx-10 relative`}
    >
      <Header handleSidebar={handleSidebar}/>
      <section>
        <Sidebar isSidebarOpen={isSidebarOpen}/>
        <div className="ml-0 lg:ml-72 py-2 px-6">
          hey
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse itaque mollitia, sed aut nobis explicabo perspiciatis autem dolor placeat dignissimos facere perferendis cupiditate fugiat, commodi maxime quas saepe laudantium delectus!
        </div>
      </section>
    </section>
  );
};

export default Todo;
