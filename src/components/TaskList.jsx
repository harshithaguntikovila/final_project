import React from "react";
import TaskItem from "./TaskItem.jsx";

const TaskList = ({ tasks, updateStatus }) => {
  if (tasks.length === 0) return <p>No tasks available</p>;

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateStatus={updateStatus}
        />
      ))}
    </>
  );
};

export default React.memo(TaskList);