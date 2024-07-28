import Header from "../components/Header";
import TodoList from "../components/TodoList";
import FloatingButton from "../assets/utils/FAB";

const Home = ({ tasks, deleteTask, editTask, updateTaskStatus }) => {
  return (
    <div className="w-screen h-screen bg-customWhite flex flex-col items-center justify-center py-10 overflox-y-scroll">
      <div className="w-full h-full flex flex-col items-center max-w-screen-2xl pt-20 mx-auto rounded-md relative">
        <Header />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
          updateTaskStatus={updateTaskStatus}
        />
        <FloatingButton className="absolute right-10 bottom-2" />
      </div>
    </div>
  );
};

export default Home;
