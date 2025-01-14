// src/components/ThemeToggle.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Features/themeSlice";
import { Moon, Sun } from "lucide-react";

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  console.log(mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2  rounded"
    >
      {mode === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeBtn;
