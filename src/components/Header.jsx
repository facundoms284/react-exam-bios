import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const TitleComponent = location.pathname === "/" ? "TODO LIST" : "ADD A TASK";
  return (
    <header className="flex items-center justify-center w-full">
      <h1 className="text-3xl font-bold text-customBlack mb-6">
        {TitleComponent}
      </h1>
    </header>
  );
};

export default Header;
