import { useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

import LightModeIcon from "../icons/LightModeIcon.svg";
import DarkModeIcon from "../icons/DarkModeIcon.svg";

const LightDarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="rounded-lg p-2 outline-none bg-customPurple text-customWhite hover:bg-[#5a50e6] flex-shrink-0 w-12 h-12 cursor-pointer flex items-center justify-center">
      <img
        title="Toggle theme"
        className="h-6 w-6"
        src={theme === "light" ? DarkModeIcon : LightModeIcon}
        alt="A light or dark mode icon"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default LightDarkMode;
