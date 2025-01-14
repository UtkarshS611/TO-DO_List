import { Bell, Calendar, Repeat } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Features/todoSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = () => {
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div className="bg-emerald-50">
      <div className="bg-gradient-to-t from-emerald-50 to-white p-4">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          name="Task"
          id="Task"
          className="bg-transparent w-full p-2 rounded-lg outline-none"
          placeholder="Add a task"
        ></input>
        <div className="flex justify-between items-center mt-10 p-2">
          <div className="flex items-center gap-4">
            <Bell />
            <Repeat />
            <Calendar />
          </div>
          <button
            className="uppercase bg-emerald-300 text-emerald-900 px-4 py-2 rounded-lg"
            onClick={addTodoHandler}
          >
            add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
