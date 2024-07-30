import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

import LightModeIcon from "../icons/LightModeIcon.svg";
import DarkModeIcon from "../icons/DarkModeIcon.svg";

const LightDarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="rounded-md py-[9.5px] px-3 outline-none bg-customPurple text-white hover:bg-[#5a50e6] flex-shrink-0">
      <img
        title="Toggle theme"
        className="h-6 w-6 cursor-pointer"
        src={theme === "light" ? LightModeIcon : DarkModeIcon}
        alt="A toggle icon"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default LightDarkMode;
