import { Routes, Route, useParams } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Main from "./Components/domain/Main";
import Userinfo from "./Components/userinfo/Userinfo";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Usernull from "./Components/usernull/Usernull";
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Userinfo />} />
          <Route path="/usernull" element={<Usernull />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
};

export default App;
