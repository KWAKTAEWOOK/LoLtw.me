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
const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/info" element={<Userinfo />} />
        </Routes>
      </RecoilRoot>
    </div>
  );
};

export default App;
