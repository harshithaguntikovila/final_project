import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/SignUp.jsx";
import WorkFlowPage from "./pages/WorkFlowPage.jsx";


const App = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [loading, setLoading] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, status: "Todo" };
    setTasks(prev => [...prev, newTask]);
  };

  const updateStatus = (id, newStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  if (loading) return <p className="center">Loading...</p>;

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard tasks={tasks} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/workflow/:status"
          element={
            isAuthenticated ? (
              <WorkFlowPage
                tasks={tasks}
                addTask={addTask}
                updateStatus={updateStatus}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;