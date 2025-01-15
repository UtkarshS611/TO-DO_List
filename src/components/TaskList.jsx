import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatus, removeTodo } from "../Redux/Features/todoSlice";
import { Star, X } from "lucide-react";

const TaskList = ({handleEdit , editBox}) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const pendingTasks = todos.filter((todo) => todo.status === "pending");
  const completedTasks = todos.filter((todo) => todo.status === "completed");

  return (
    <div>
      <h2 className="border-b-[1.5px] p-1">Pending Tasks</h2>
      <ul>
        {pendingTasks.map((todo) => (
          <div
            key={todo.id}
            className="py-2 flex items-center justify-between border-b-[1.5px]"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.status === "completed"}
                onChange={() => handleToggleStatus(todo.id)}
              />
              <span className="cursor-pointer" onClick={handleEdit}>
                {todo.text}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleRemove(todo.id)}
                className="text-red-500 bg-red-100 p-0.5 rounded-md"
              >
                <X />
              </button>
              <Star />
            </div>
          </div>
        ))}
      </ul>

      <h2 className="border-b-[1.5px] p-1">Completed Tasks</h2>
      <ul>
        {completedTasks.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between py-2 border-b-[1.5px]">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.status === "completed"}
                onChange={() => handleToggleStatus(todo.id)}
              />
              <span className="cursor-pointer" onClick={handleEdit}>
              {todo.text}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleRemove(todo.id)}
                className="text-red-500 bg-red-100 p-0.5 rounded-md"
              >
                <X />
              </button>
              <Star />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
