import React, { useEffect, useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import {
  NotebookText,
  Calendar,
  Star,
  ScrollText,
  UserCheck,
  Plus,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/Features/authSlice";

const Sidebar = ({ isSidebarOpen }) => {
  // Get the current theme mode
  const mode = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Task categories for sidebar options
  const taskCategories = [
    { name: "All Tasks", icon: NotebookText },
    { name: "Today", icon: Calendar },
    { name: "Important", icon: Star },
    { name: "Planned", icon: ScrollText },
    { name: "Assigned to me", icon: UserCheck },
  ];

  const [isMobileView, setIsMobileView] = useState(false);

  // change the sidebar for a mobile nav on smaller screens
  const handleResize = () => {
    setIsMobileView(window.innerWidth > 1024);
  };

  const [profileOptions, setProfileOptions] = useState(false);

  const handleProfileOptions = () => {
    {
      setProfileOptions(!profileOptions);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobileView ? (
        <aside
          className={`max-w-72 w-full fixed shadow-md hidden lg:block ${
            mode === "dark" ? "bg-[#2c2c2c]" : "bg-emerald-50"
          } `}
        >
          <div className={`h-36 w-full relative`}>
            <div
              className="h-24 w-24 rounded-full p-2 bg-white/80 shadow-md absolute left-[50%] translate-x-[-50%] bottom-[-35%] cursor-pointer"
              onClick={handleProfileOptions}
            >
              <img
                src="/Profile.webp"
                className="rounded-full h-full w-full"
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 font-semibold text-center">
            <h1>Hey, John</h1>
            <div
              className={`flex-col border m-3 ${
                profileOptions ? "flex" : "hidden"
              }  ${mode === "dark" ? "bg-[#232323]" : "bg-white"}`}
            >
              <span className="text-center border py-3">My profile</span>
              <span className="text-center border py-3">
                <button onClick={handleLogout}>Logout</button>
              </span>
            </div>
          </div>
          <div
            className={`px-6 py-2 m-3 shadow-lg ${
              mode === "dark" ? "bg-[#232323]" : "bg-white"
            }`}
          >
            {taskCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-emerald-200 hover:text-emerald-900 cursor-pointer"
                >
                  <Icon />
                  <span>{category.name}</span>
                </div>
              );
            })}
          </div>
          <div
            className={`flex items-center gap-3 px-6 py-2 m-3 shadow-lg ${
              mode === "dark" ? "bg-[#232323]" : "bg-white"
            }`}
          >
            <span>
              <Plus />
            </span>
            <p>Add List</p>
          </div>
          <div
            className={`flex items-center px-6 py-2 m-3 shadow-lg ${
              mode === "dark" ? "bg-[#232323]" : "bg-white"
            }`}
          >
            <Doughnut
              data={{
                labels: ["Pending", "Done"],
                datasets: [
                  {
                    label: "Tasks",
                    data: [3, 1],
                    backgroundColor: ["#aad576", "#415d43"],
                  },
                ],
              }}
            />
          </div>
        </aside>
      ) : (
        <aside
          className={`w-full absolute left-0 ${
            isSidebarOpen ? "block" : "hidden"
          } shadow-md ${mode === "dark" ? "bg-[#2c2c2c]" : "bg-emerald-50"} `}
        >
          <div className={`h-36 w-full relative`}>
            <div
              className="h-24 w-24 rounded-full p-2 bg-white/80 shadow-md absolute left-[50%] translate-x-[-50%] bottom-[-35%] cursor-pointer"
              onClick={handleProfileOptions}
            >
              <img
                src="/Profile.webp"
                className="rounded-full h-full w-full"
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 font-semibold text-center">
            <h1>Hey, John</h1>
            <div
              className={`flex-col border m-3 ${
                profileOptions ? "flex" : "hidden"
              }  ${mode === "dark" ? "bg-[#232323]" : "bg-white"}`}
            >
              <span className="text-center border py-3">My profile</span>
              <span className="text-center border py-3">
                <button onClick={handleLogout}>Logout</button>
              </span>
            </div>
          </div>
          <div
            className={`px-6 py-2 m-3 shadow-lg ${
              mode === "dark" ? "bg-[#232323]" : "bg-white"
            }`}
          >
            {taskCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-emerald-200 hover:text-emerald-900 cursor-pointer"
                >
                  <Icon />
                  <span>{category.name}</span>
                </div>
              );
            })}
          </div>
          <div
            className={`flex items-center gap-3 px-6 py-2 m-3 shadow-lg ${
              mode === "dark" ? "bg-[#232323]" : "bg-white"
            }`}
          >
            <span>
              <Plus />
            </span>
            <p>Add List</p>
          </div>
          <div
            className={`flex items-center justify-center px-6 py-2 m-3 shadow-lg ${
              mode === "dark" ? "bg-[#232323]" : "bg-white"
            }`}
          >
            <Doughnut
              data={{
                labels: ["Pending", "Done"],
                datasets: [
                  {
                    label: "Tasks",
                    data: [3, 1],
                    backgroundColor: ["#aad576", "#415d43"],
                  },
                ],
              }}
            />
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
