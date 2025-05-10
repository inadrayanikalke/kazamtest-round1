import React from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useTasks } from "../hooks/useTasks";

const TodoApp: React.FC = () => {
  const { tasks, createTask } = useTasks();
  return (
    <div className="shadow-sky-100 shadow bg-white rounded-2xl p-8 max-w-2xl ">
      <h3 className="text-2xl mb-4 font-bold">📝 Note App</h3>
      <TaskInput onAdd={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TodoApp;
