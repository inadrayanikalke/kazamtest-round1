import React from "react";

interface TaskListProps {
  tasks: string[];
}
const TaskList: React.FC<TaskListProps> = ({ tasks }) => (

  <ul>
    <text className="font-bold text-lg p-4">Notes</text>
    {tasks?.map((task, idx) => (
      <li key={`${task}-${idx}`} className="py-2 border-b">
        {task}
      </li>
    ))}
  </ul>
);

export default TaskList;
