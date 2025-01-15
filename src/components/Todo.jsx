import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Features/authSlice";

import { useNavigate } from "react-router-dom";

import { ChevronDown } from "lucide-react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import TaskEdit from "./TaskEdit";

const Todo = () => {
  const mode = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const[editBox, setEditBox] = useState(false);

  const handleEdit = () => {
    setEditBox(true);
  }

  return (
    <section
      className={`${
        mode === "dark" ? "bg-[#242424] text-[#f5f5f5]" : "bg-white text-black"
      } px-10 relative h-screen`}
    >
      <Header handleSidebar={handleSidebar} />
      <section>
        <TaskEdit editBox={editBox} setEditBox={setEditBox} />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className={`ml-0 lg:ml-72 py-2 px-6 ${editBox? "mr-80" : "mr-0"}`}>
          <div className="py-1 flex items-center gap-3 border-b-[1.5px]">
            <h1>To Do</h1>
            <ChevronDown className="size-4" />
          </div>
          <TaskInput handleEdit={handleEdit} editBox={editBox}/>
          <TaskList handleEdit={handleEdit} editBox={editBox}/>
        </div>
      </section>
    </section>
  );
};

export default Todo;
