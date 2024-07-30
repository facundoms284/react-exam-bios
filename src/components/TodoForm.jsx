import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Componente utils
import AddTaskBtn from "../assets/utils/AddTaskButton";
import { ThemeContext } from "../assets/utils/ThemeContext";

const TodoForm = ({ addTask }) => {
  const { theme } = useContext(ThemeContext);

  const [task, setTask] = useState("");
  const [isValidTask, setIsValidTask] = useState(true);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleAddTaskBtn = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
      setShowError(false);
      navigate("/");
    } else {
      setIsValidTask(false);
      setShowError(true);
    }
  };

  useEffect(() => {
    if (!isValidTask) {
      const timer = setTimeout(() => {
        setIsValidTask(true);
        setShowError(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isValidTask]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl ">
      <div className="flex flex-col md:flex-row p-2 md:p-0 gap-5 w-full items-center justify-center">
        <span
          className={` ${
            theme === "light" ? "border-customPurple" : "border-customWhite"
          } rounded-lg h-12 flex items-center justify-between gap-2 p-3 border w-full sm:max-w-[600px]`}
        >
          <input
            className={`rounded-lg w-full outline-none p-1.5 bg-transparent ${
              theme === "light" ? "text-customGray" : "text-customWhite"
            }`}
            placeholder="Enter a new task..."
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </span>
        <AddTaskBtn onClick={handleAddTaskBtn}>ADD A TASK</AddTaskBtn>
      </div>
      {showError && <p className="text-customRed mt-3">Task cannot be empty</p>}
    </div>
  );
};

export default TodoForm;
