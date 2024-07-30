import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const Modal = ({
  isOpen,
  closeModal,
  taskText,
  setTaskText,
  saveChanges,
  deleteTask,
  isEditMode,
}) => {
  const { theme } = useContext(ThemeContext);

  const [invalidEditTaskText, setInvalidEditTaskText] = useState(false);

  useEffect(() => {
    let timer;
    if (invalidEditTaskText) {
      timer = setTimeout(() => setInvalidEditTaskText(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [invalidEditTaskText]);

  if (!isOpen) return null;

  const handleSaveChanges = () => {
    if (taskText.trim()) {
      saveChanges();
      setInvalidEditTaskText(false);
    } else {
      setInvalidEditTaskText(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div
        className={`p-5 rounded-md shadow-md w-96 ${
          theme === "light"
            ? "bg-customWhite"
            : "bg-customGray text-customWhite"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">
          {isEditMode ? "Edit Task" : "Delete Task"}
        </h2>
        {isEditMode ? (
          <>
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              className={`w-full p-2 border rounded-md mb-2 outline-none bg-transparent ${
                theme === "light"
                  ? "border-customPurple"
                  : "border-gray-600 text-customWhite"
              }`}
            />
            {invalidEditTaskText && (
              <p className="text-customRed text-sm mb-3">
                Task text cannot be empty.
              </p>
            )}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSaveChanges}
                className="px-4 py-2 bg-customPurple text-customWhite rounded-md outline-none font-bold"
              >
                SAVE
              </button>
              <button
                onClick={closeModal}
                className={`px-4 py-2 bg-transparent border border-customPurple text-customPurple rounded-md font-bold`}
              >
                CANCEL
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <p>Are you sure you want to delete this task?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={deleteTask}
                className="px-4 py-2 bg-customRed text-customWhite rounded-md outline-none font-bold"
              >
                DELETE
              </button>
              <button
                onClick={closeModal}
                className={`px-4 py-2 bg-transparent border border-customPurple text-customPurple rounded-md font-bold`}
              >
                CANCEL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
