import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../assets/utils/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const TitleComponent = location.pathname === "/" ? "TODO LIST" : "ADD A TASK";
  return (
    <header
      className={`text-3xl font-bold mb-6 ${
        theme === "light" ? "text-customGray" : "text-customWhite"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">{TitleComponent}</h1>
    </header>
  );
};

export default Header;
