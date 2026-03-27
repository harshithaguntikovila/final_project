import React from "react";

const Dashboard = ({ tasks }) => {
  const total = tasks.length;
  const todo = tasks.filter(t => t.status === "Todo").length;
  const progress = tasks.filter(t => t.status === "In Progress").length;
  const done = tasks.filter(t => t.status === "Done").length;

  return (
    <div className="container">
      <h2>Dashboard Overview</h2>
      <div className="dashboard">
        <div className="card">Total Tasks: {total}</div>
        <div className="card">Todo: {todo}</div>
        <div className="card">In Progress: {progress}</div>
        <div className="card">Done: {done}</div>
      </div>
    </div>
  );
};

export default Dashboard;