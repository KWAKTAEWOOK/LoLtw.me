import React from "react";
import "../userinfo/userinfo.css";
import { useParams } from "react-router-dom";
const Userinfo = () => {
  return (
    <div>
      <div className="userbox">
        <div className="userinfo">
          <div className="usericon">
            {" "}
            <img
              className="iconimg"
              src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${1}.png`}
              alt=""
            />{" "}
            <div className="level">88</div>
          </div>
          <div className="usercontent">
            <div className="username">솬사이름</div>
            <div className="userboxbut">
              <button className="updatebut">업데이트</button>

              <a
                href={`http://ifi.gg/summoner/${"스톡홀름질환자"}`}
                target="_blank"
              >
                롤 몇시간한지 궁금해?
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="rankimg">
            <img src="/images/골드.png" alt="" />
            <div className="level">IV</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
