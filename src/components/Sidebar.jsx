import React, { useEffect, useState } from "react";

import {
  NotebookText,
  Calendar,
  Star,
  ScrollText,
  UserCheck,
  Plus,
} from "lucide-react";

const Sidebar = ({ isSidebarOpen }) => {
  const taskCategories = [
    { name: "All Tasks", icon: NotebookText },
    { name: "Today", icon: Calendar },
    { name: "Important", icon: Star },
    { name: "Planned", icon: ScrollText },
    { name: "Assigned to me", icon: UserCheck },
  ];

  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth > 1024);
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
        <aside className={`max-w-72 w-full fixed bg-white shadow-md hidden lg:block`}>
          <div className="h-36 w-full bg-red-200 relative">
            <div className="h-24 w-24 rounded-full p-2 bg-white shadow-md absolute left-[50%] translate-x-[-50%] bottom-[-35%]">
              <img
                src="/Profile.webp"
                className="rounded-full h-full w-full"
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 font-semibold text-center">
            <h1>Hey, John</h1>
          </div>
          <div className="px-6 m-3 bg-white shadow-lg">
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
          <div className="flex items-center gap-3 px-6 py-2 m-3 bg-white shadow-lg">
            <span>
              <Plus />
            </span>
            <p>Add List</p>
          </div>
        </aside>
      ) : (
        <aside className={`absolute left-0 w-full  ${isSidebarOpen? "block" : "hidden"}`}>
          <div className="h-36 w-full bg-red-200 relative">
            <div className="h-24 w-24 rounded-full p-2 bg-white shadow-md absolute left-[50%] translate-x-[-50%] bottom-[-35%]">
              <img
                src="/Profile.webp"
                className="rounded-full h-full w-full"
                alt=""
              />
            </div>
          </div>
          <div className="mt-14 font-semibold text-center">
            <h1>Hey, John</h1>
          </div>
          <div className="px-6 m-3 bg-white shadow-lg">
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
          <div className="flex items-center gap-3 px-6 py-2 m-3 bg-white shadow-lg">
            <span>
              <Plus />
            </span>
            <p>Add List</p>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
