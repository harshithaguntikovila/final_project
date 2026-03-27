import React from "react";

const TaskItem = ({ task, updateStatus }) => {
  const getNextStatus = () => {
    if (task.status === "Todo") return "In Progress";
    if (task.status === "In Progress") return "Done";
    return null;
  };

  const nextStatus = getNextStatus();

  return (
    <div className="task">
      <span>{task.title}</span>
      {nextStatus && (
        <button onClick={() => updateStatus(task.id, nextStatus)}>
          Move to {nextStatus}
        </button>
      )}
    </div>
  );
};

export default React.memo(TaskItem);