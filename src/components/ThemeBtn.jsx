import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Features/themeSlice";

import { Moon, Sun } from "lucide-react";

const ThemeBtn = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);


  return (
    <button
      onClick={() => dispatch(toggleTheme())}
    >
      {mode === "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeBtn;
