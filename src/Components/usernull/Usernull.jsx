import React from "react";
import Topbar from "../Topbar/Topbar";
import "../usernull/Usernull.css";
const Usernull = () => {
  return (
    <div>
      <Topbar />
      <div className="undefinedbox">
        <span className="undefined">소환사 정보를 찾을수 없습니다.</span>
      </div>
    </div>
  );
};

export default Usernull;
