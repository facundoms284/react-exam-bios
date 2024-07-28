import FloatingButton from "../assets/utils/FAB";
import TodoForm from "../components/TodoForm";
import Header from "../components/Header";

const ToDoDetails = ({ addTask }) => {
  return (
    <div className="w-screen h-screen bg-customWhite flex flex-col items-center py-10 overflox-y-scroll justify-center">
      <div className="w-full h-full max-h-96 max-w-screen-lg mx-auto rounded-md relative flex flex-col items-center justify-center p-3 sm:p-0 shadow-none lg:shadow-md">
        <Header />
        <TodoForm addTask={addTask} />
        <FloatingButton className="absolute right-10 bottom-5" />
      </div>
    </div>
  );
};

export default ToDoDetails;
