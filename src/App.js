import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Main from "./Components/domain/Main";
import Userinfo from "./Components/userinfo/Userinfo";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Userinfo />} />
      </Routes>
    </div>
  );
};

export default App;
