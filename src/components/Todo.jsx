import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Features/authSlice";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ChevronDown } from "lucide-react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TODO from "./TaskList";
import List from "./TaskList";

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
          <div className="py-1 flex items-center gap-3 border-b-[1.5px]">
            <h1>To Do</h1>
            <ChevronDown className="size-4"/>
          </div>
          <TaskInput/>
          <List/>
        </div>
      </section>
    </section>
  );
};

export default Todo;
