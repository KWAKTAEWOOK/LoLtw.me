import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Topbar/Topbar.css";
import { useRecoilState } from "recoil";
import { langState, userState } from "../../recoil";
import { API_key } from "../../utils";
const Topbar = () => {
  const [summonerName, setsummonerName] = useState("");
  const [data, setdata] = useState(() => "");
  const [lol, setlol] = useRecoilState(userState);
  const [langs, setlangs] = useRecoilState(langState);

  const getdata = async (error) => {
    try {
      const data = await axios({
        url: `https://${lang}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?${API_key}`,
        method: "get",
      });
      setdata(data.data);
      setlol(data.data);
      setlangs(lang);
      console.log("data: ", data);
      window.location.href = `http://localhost:3000/info`;
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        window.location.href = `http://localhost:3000/usernull`;
      }
    }
  };

  const onSubmoit = (e) => {
    e.preventDefault();
    getdata();
  };
  const [lang, setlang] = useState("kr");
  const langChange = (e) => {
    setlang(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmoit(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div>
      <div className="toolbar">
        <div className="toolbar-logo">
          <a href="/">LoLTw.gg</a>
        </div>

        <form action="/search" method="get">
          <div className="searchbox1">
            <select
              className="searchlanguage1"
              name="platform"
              onChange={langChange}
            >
              <option value="kr" selected="">
                KR
              </option>
              <option value="br1">BR</option>
              <option value="eun1">EUNE</option>
              <option value="euw1">EUW</option>
              <option value="jp1">JP</option>
              <option value="la1">LAN</option>
              <option value="la2">LAS</option>
              <option value="na1">NA</option>
              <option value="oc1">OCE</option>
              <option value="tr1">TR</option>
              <option value="ru">RU</option>
            </select>
            <input
              className="searchbox-box1"
              class="recent-pop1"
              type="text"
              name="username"
              placeholder="소환사명을 입력하세요"
              autocomplete="off"
              required="true"
              value={summonerName}
              onClick={handleOnKeyPress}
              onChange={(e) => setsummonerName(e.target.value)}
            />

            <button className="searchbut1" onClick={onSubmoit}>
              <img className="searchimg" src="images/검색.png" alt="" />
            </button>
          </div>
        </form>
        <select className="lang-select">
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  );
};

export default Topbar;
