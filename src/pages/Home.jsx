import { useContext } from "react";
import { ThemeContext } from "../assets/utils/ThemeContext";

// Components
import Header from "../components/Header";
import TodoList from "../components/TodoList";

// Floating button
import FloatingButton from "../assets/utils/FAB";

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
        <FloatingButton className="fixed right-10 bottom-5 sm:right-20 sm:bottom-10" />
      </div>
    </div>
  );
};

export default Home;
