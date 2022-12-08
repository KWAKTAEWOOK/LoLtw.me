import React, { useState, useEffect } from "react";
import axios from "axios";
import "../domain/Main.css";
import { useRecoilState } from "recoil";
import { langState, userState } from "../../recoil";

const Main = () => {
  const [summonerName, setsummonerName] = useState("");
  const [data, setdata] = useState(() => "");
  const [lol, setlol] = useRecoilState(userState);
  const [langs, setlangs] = useRecoilState(langState);

  const getdata = async () => {
    const data = await axios({
      url: `https://${lang}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-8ec036a1-28ee-49bf-a6c3-ebae2c8080b9`,
      method: "get",
    });
    setdata(data.data);
    setlol(data.data);
    setlangs(lang);
    window.location.href = `http://localhost:3000/info`;
  };
  console.log(lol);
  console.log(langs);
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
  console.log("솬사정보", data);

  return (
    <div className="main">
      <div>
        <div>
          <select className="lang-select">
            <div></div>
            <option value="ko">한국어</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
      <div className="info">
        <span className="m1"> 롤 전적 검색 사이트 </span>
        <span className="n1"> LoLtw.me </span>
      </div>
      <form className="searchbox" action="/search" method="get">
        <select
          className="searchlanguage"
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
          id="searchbox-box"
          class="recent-pop"
          type="text"
          name="username"
          placeholder="소환사명을 입력하세요"
          autocomplete="off"
          required="true"
          value={summonerName}
          onClick={handleOnKeyPress}
          onChange={(e) => setsummonerName(e.target.value)}
        />

        <button className="searchbut" onClick={onSubmoit}>
          <img className="searchimg" src="images/검색.png" alt="" />
        </button>
      </form>
    </div>
  );
};

export default Main;
