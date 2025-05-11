import React from "react";

interface TaskListProps {
  tasks: string[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
  <ul className="overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-200">
    <text className="font-bold text-lg">Notes</text>
    {tasks?.map((task, idx) => (
      <li key={`${task}-${idx}`} className=" px-2 md:px-0 py-2 border-b">
        {task}
      </li>
    ))}
  </ul>
);

export default TaskList;
