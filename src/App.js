import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LogIn } from "./components/Login";
import { CreatePost } from "./components/CreatePost";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};
