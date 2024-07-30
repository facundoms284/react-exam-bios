import { useContext } from "react";
import { ThemeContext } from "../assets/utils/ThemeContext";

import Header from "../components/Header";
import TodoList from "../components/TodoList";
import FloatingButton from "../assets/utils/FAB";

import "../styles/Theme.css";

const Home = ({ tasks, deleteTask, editTask, updateTaskStatus }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-screen h-screen ${
        theme === "light" ? "bg-customWhite" : "bg-customGray"
      } flex flex-col items-center justify-center py-10 overflow-y-scroll`}
    >
      <div className="w-full h-full flex flex-col items-center max-w-screen-2xl pt-20 mx-auto rounded-md relative">
        <Header />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          updateTaskStatus={updateTaskStatus}
        />
        <FloatingButton className="fixed right-10 bottom-5 sm:bottom-16 sm:right-72" />
      </div>
    </div>
  );
};

export default Home;
