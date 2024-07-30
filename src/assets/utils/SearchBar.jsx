import { useState, useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

import LightDarkMode from "../utils/LightDarkMode";

// Icon
import SearchIcon from "../icons/Search.svg";
import SearchDarkMode from "../icons/SearchDarkMode.svg";

const SearchBar = ({ onSearch, onFilter }) => {
  const { theme } = useContext(ThemeContext);

  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    console.log(`Filter changed: ${e.target.value}`);
    setSelectedFilter(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="flex flex-col gap-5 mb-10 w-full max-w-4xl items-center justify-center sm:flex-row p-5 ">
      <span
        className={`${
          theme === "light" ? "border-customPurple" : "border-customWhite"
        } flex items-center justify-between gap-2 px-4 py-1 border
      rounded-md w-full sm:max-w-[600px]`}
      >
        <input
          placeholder="Search a task..."
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          className={`rounded-lg p-1.5 w-full outline-none bg-transparent ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        />
        <img
          title="Search a task"
          className="h-8 w-8 cursor-pointer"
          src={theme === "light" ? SearchIcon : SearchDarkMode}
          alt="A search icon"
        />
      </span>
      <div className="flex gap-2 items-center sm:flex-row">
        <select
          title="Filter by status"
          value={selectedFilter}
          onChange={handleFilterChange}
          className="rounded-md py-[10px] px-2.5 w-full sm:w-auto max-w-xs outline-none bg-customPurple text-white hover:bg-[#5a50e6]"
        >
          <option value="">ALL</option>
          <option value="completed">COMPLETED</option>
          <option value="uncompleted">UNCOMPLETED</option>
        </select>
        <LightDarkMode />
      </div>
    </div>
  );
};

export default SearchBar;
