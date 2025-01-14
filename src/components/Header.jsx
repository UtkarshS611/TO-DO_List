import { Grid2x2, Menu, Search } from "lucide-react";
import React from "react";
import ThemeBtn from "./ThemeBtn";

const Header = ({handleSidebar}) => {
  return (
    <header className="flex justify-between py-2">
      <div className="flex items-center gap-3">
        <Menu onClick={handleSidebar} className="cursor-pointer"/>
        <span className="text-[#3F9142] flex items-center gap-2">
          <img src="/Logo.svg" alt="" />
          <p className="font-semibold">DoIt</p>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span>
          <Search />
        </span>
        <span>
          <Grid2x2 />
        </span>
        <span>
          <ThemeBtn />
        </span>
      </div>
    </header>
  );
};

export default Header;
