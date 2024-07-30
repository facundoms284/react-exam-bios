import FloatingButton from "../assets/utils/FAB";
import TodoForm from "../components/TodoForm";
import Header from "../components/Header";

import { useContext } from "react";
import { ThemeContext } from "../assets/utils/ThemeContext";
import "../styles/Theme.css";

const ToDoDetails = ({ addTask }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-screen h-screen ${
        theme === "light" ? "bg-customWhite" : "bg-customGray"
      } flex flex-col items-center justify-center py-10 p-5 overflow-y-scroll`}
    >
      <div
        className={`w-full h-full max-h-96 max-w-screen-lg mx-auto rounded-md relative flex flex-col items-center justify-center p-3 sm:p-0 shadow-none lg:shadow-md ${
          theme === "light"
            ? "bg-customWhitey"
            : "bg-customGray border border-customWhite"
        }`}
      >
        <Header />
        <TodoForm addTask={addTask} />
        <FloatingButton className="absolute right-10 bottom-5" />
      </div>
    </div>
  );
};

export default ToDoDetails;
