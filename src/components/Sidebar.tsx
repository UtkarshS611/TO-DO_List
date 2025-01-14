import {
  NotebookText,
  Calendar,
  Star,
  ScrollText,
  UserCheck,
  Plus,
} from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const Sidebar: React.FC = () => {
  type TaskCategoryType = {
    name: string;
    icon: React.ElementType;
  };

  const taskCategories: TaskCategoryType[] = [
    { name: "All Tasks", icon: NotebookText },
    { name: "Today", icon: Calendar },
    { name: "Important", icon: Star },
    { name: "Planned", icon: ScrollText },
    { name: "Assigned to me", icon: UserCheck },
  ];

  return (
    <aside className="max-w-72 w-full bg-gradient-to-tr from-emerald-100 to-white  h-screen fixed">
      <div className="max-h-40 h-full bg-gradient-to-tr from-[#99e2b4] to-[#248277] relative">
        <div className="shadow-md bg-white p-2 rounded-full w-36 h-36 absolute bottom-[-50%] left-[50%] translate-x-[-50%]">
          <img
            src="/Profile.webp"
            className="rounded-full w-full h-full"
            alt="Profile Picture"
          />
        </div>
      </div>
      <div className="mt-24 text-center">Hey, John</div>
      <div className="space-y-3 p-6 bg-white shadow-lg m-2">
        {taskCategories.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2 bg-emerald-100 p-2 rounded-lg text-green-700">
              <span>
                <Icon size={24} />
              </span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="p-2 flex items-center gap-2 bg-white shadow-lg m-2">
        <span>
          <Plus/>
        </span>
        <span>Add List</span>
      </div>
      <div className="bg-white shadow-lg m-2">
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
  );
};

export default Sidebar;
