import React from "react";
import { useParams } from "react-router-dom";
import TaskForm from "../components/TaskForm.jsx";
import TaskList from "../components/TaskList.jsx";

const WorkflowPage = ({ tasks, addTask, updateStatus }) => {
  const { status } = useParams();
  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div className="container">
      <h2>{status} Tasks</h2>

      {status === "Todo" && <TaskForm addTask={addTask} />}

      <TaskList tasks={filteredTasks} updateStatus={updateStatus} />
    </div>
  );
};

export default WorkflowPage;