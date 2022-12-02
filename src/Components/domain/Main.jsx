import React, { useState } from "react";
import axios from "axios";
import "../domain/Main.css";
const Main = () => {
  const [summonerName, setsummonerName] = useState("");
  const [data, setdata] = useState("");
  const [league, setleague] = useState("");
  const onSubmoit = (e) => {
    e.preventDefault();
    getdata();
  };

  const getdata = async () => {
    const data = await axios({
      url: `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=RGAPI-28a8695d-1e45-4779-87e0-1c4bcf227869`,
      method: "get",
    });
    setdata(data.data);
    getLEAGUE();
  };

  const getLEAGUE = async () => {
    const league = await axios({
      url: `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${data.id}?api_key=RGAPI-28a8695d-1e45-4779-87e0-1c4bcf227869`,
      method: "get",
    });
    setleague(league.data);
  };

  console.log("솬사정보", data);
  console.log("리그정보", league);
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
      <form className="searchbox">
        <select className="searchlanguage" name="platform">
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
          class="recent-pop"
          type="text"
          name="username"
          placeholder="소환사명을 입력하세요"
          autocomplete="off"
          required="true"
          value={summonerName}
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
