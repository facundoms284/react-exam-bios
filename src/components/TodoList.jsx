import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import DeleteHover from "../assets/icons/DeleteHover.svg";
import Delete from "../assets/icons/Delete.svg";
import Edit from "../assets/icons/Edit.svg";
import EditHover from "../assets/icons/EditHover.svg";

import NoTaskFoundImg from "../assets/images/NoTaskFound.png";

import MyCheckbox from "../assets/utils/CheckBox";
import IconWithHover from "../assets/utils/IconWithHover";
import SearchBar from "../assets/utils/SearchBar";
import Modal from "../assets/utils/Modal";

import "../styles/Animation.css";
import "../styles/Spinner.css";

const TodoList = ({ tasks, updateTaskStatus, deleteTask, editTask }) => {
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null); // Index of the task being edited or deleted with the modal open.
  const [isEditMode, setIsEditMode] = useState(true);
  const [newTaskText, setNewTaskText] = useState("");

  // Loading state
  const [loading, setLoading] = useState(true);

  // Search and filter states
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    setLoading(false);
  }, [tasks]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center font-bold">
        <div className="spinner" />
      </div>
    );
  }

  const filteredTasks = tasks.filter((task) => {
    const textMatch = task.text
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const statusMatch =
      statusFilter === "" ||
      (statusFilter === "completed" && task.isCompleted) ||
      (statusFilter === "uncompleted" && !task.isCompleted);
    return textMatch && statusMatch;
  });

  const handleCheckboxChange = (index) => {
    // If the task exists in the filtered tasks ->
    if (filteredTasks[index]) {
      // Get the specific index of the task in the filtered task array to update its status
      updateTaskStatus(tasks.indexOf(filteredTasks[index]));
    }
  };

  const openModal = (index, editMode) => {
    setCurrentTaskIndex(index);
    setIsEditMode(editMode);
    setNewTaskText(tasks[index].text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTaskIndex(null);
    setNewTaskText("");
  };

  const saveChanges = () => {
    if (currentTaskIndex !== null && newTaskText.trim()) {
      editTask(currentTaskIndex, newTaskText);
      closeModal();
    }
  };

  const handleDelete = () => {
    if (currentTaskIndex !== null) {
      deleteTask(currentTaskIndex);
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <SearchBar onSearch={setSearchText} onFilter={setStatusFilter} />
      {filteredTasks.length === 0 ? (
        <div className="mt-15 flex flex-col items-center justify-center w-full gap-5">
          <figure>
            <img src={NoTaskFoundImg} alt="No task found" />
          </figure>
          <p className="text-center text-xl font-bold">Empty...</p>
        </div>
      ) : (
        <TransitionGroup
          component="ul"
          className="flex flex-col items-center justify-center w-full max-w-lg p-5 sm:p-0"
        >
          {filteredTasks.map((task, index) => (
            <CSSTransition
              key={index}
              timeout={700}
              classNames="fade"
              unmountOnExit
            >
              <li
                key={index}
                className={`flex w-full border-b-2 justify-between mb-5 ${
                  task.isCompleted ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex items-center flex-1">
                  <MyCheckbox
                    checked={task.isCompleted || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div className="flex-1 ml-2">
                    <label
                      className={`font-bold text-xl block ${
                        task.isCompleted ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {task.text}
                    </label>
                  </div>
                </div>
                <div className="flex-none flex items-center gap-2 px-2">
                  <IconWithHover
                    defaultIcon={Edit}
                    hoverIcon={EditHover}
                    alt="Edit icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => openModal(index, true)}
                  />
                  <IconWithHover
                    defaultIcon={Delete}
                    hoverIcon={DeleteHover}
                    alt="Delete icon"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => openModal(index, false)}
                  />
                </div>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        taskText={newTaskText}
        setTaskText={setNewTaskText}
        saveChanges={saveChanges}
        deleteTask={handleDelete}
        isEditMode={isEditMode}
      />
    </div>
  );
};

export default TodoList;