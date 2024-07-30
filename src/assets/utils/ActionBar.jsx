import { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Componente utils
import LightDarkMode from "./LightDarkMode";
import CustomSelectComponent from "./CustomSelectComponent";

// Icon
import SearchIcon from "../icons/Search.svg";
import SearchDarkMode from "../icons/SearchDarkMode.svg";

const ActionBar = ({ onSearch, onFilter }) => {
  const { theme } = useContext(ThemeContext);

  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="flex flex-col gap-5 mb-10 w-full max-w-4xl items-center justify-center sm:flex-row p-5 ">
      <span
        className={`${
          theme === "light" ? "border-customPurple" : "border-customWhite"
        } rounded-lg h-12 flex items-center justify-between gap-2 p-2 border w-full sm:max-w-[600px]`}
      >
        <input
          placeholder="Search a task..."
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className={` w-full outline-none bg-transparent ${
            theme === "light" ? "text-customPurple" : "text-customWhite"
          }`}
        />
        <img
          title="Search a task"
          className="h-8 w-8 cursor-pointer"
          src={theme === "light" ? SearchIcon : SearchDarkMode}
          alt="A search icon"
        />
      </span>
      <div className="flex gap-2 items-center justify-center sm:flex-row">
        <CustomSelectComponent
          selectedFilter={selectedFilter}
          handleFilterChange={handleFilterChange}
        />
        <LightDarkMode />
      </div>
    </div>
  );
};

export default ActionBar;
