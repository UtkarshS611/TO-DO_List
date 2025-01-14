import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Todo from "./components/Todo";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={isAuthenticated ? <Todo /> : <Login />} />
        <Route path="/todo" element={isAuthenticated ? <Todo /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;

