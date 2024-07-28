import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import ToDoDetails from "../pages/ToDoDetails";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");
    if (tasksFromLocalStorage) {
      setTasks(JSON.parse(tasksFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const updateTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  const addTask = (text) => {
    const newTask = { text, isCompleted: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              deleteTask={deleteTask}
              editTask={editTask}
              updateTaskStatus={updateTaskStatus}
            />
          }
        />
        <Route path="form" element={<ToDoDetails addTask={addTask} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;