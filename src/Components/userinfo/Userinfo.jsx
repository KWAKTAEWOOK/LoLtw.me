import React, { useState, useEffect } from "react";
import "../userinfo/userinfo.css";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { langState, userState } from "../../recoil";
import axios from "axios";
import League from "./League";
import Topbar from "../Topbar/Topbar";
import Match from "../match/Match";
import { API_key } from "../../utils";
const Userinfo = () => {
  const [lol, setlol] = useRecoilState(userState);
  const [lang, setlang] = useRecoilState(langState);
  const [league, setleague] = useState([]);

  const getleague = async (e) => {
    try {
      const league = await axios({
        url: `https://${lang}.api.riotgames.com/lol/league/v4/entries/by-summoner/${lol.id}?${API_key}`,
        method: "get",
      });
      console.log(league.data);
      if (league.data !== "") {
        setleague(league.data);
      } else {
        setleague([
          {
            queueType: "RANKED_SOLO_5x5",
            rank: null,
            tier: "Unranked",
          },
          {
            queueType: "RANKED_FLEX_SR",
            rank: null,
            tier: "Unranked",
          },
        ]);
      }
    } catch (ex) {
      alert("값 입력 실패");
    }
  };
  //----------------------------------------------------------------------------------------------------
  //최근 전적 20경기 가져오기
  const [match, setmatch] = useState(() => "");
  const getmatch = async (error) => {
    try {
      const match = await axios({
        url: `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${lol.puuid}/ids?start=0&count=20&${API_key}`,
        method: "get",
      });
      setmatch(match.data);
      console.log("data: ", match);
    } catch (error) {
      alert("매치데이터 못가져옴");
    }
  };
  //--------------------------------------------------------------------------------------------------
  const getgamedata = async () => {
    const gamedata = await axios({
      url: `https://asia.api.riotgames.com/lol/match/v5/matches/${match}?${API_key}`,
      method: `get`,
    });
  };

  useEffect(() => {
    getleague();
    getmatch();
  }, []);
  return (
    <div>
      <Topbar />
      <div className="userbox">
        <div className="userinfo">
          <div className="usericon">
            {" "}
            <img
              className="iconimg"
              src={`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${lol.profileIconId}.png`}
              alt=""
            />{" "}
            <div className="level">{lol.summonerLevel}</div>
          </div>
          <div className="usercontent">
            <div className="username">{lol.name}</div>
            <div className="userboxbut">
              <button className="updatebut" onClick={getleague}>
                업데이트
              </button>
              <a
                className="loltime"
                href={`http://ifi.gg/summoner/${lol.name}`}
                target="_blank"
              >
                롤 몇시간한지 궁금해?
              </a>
            </div>
          </div>
        </div>
        <>
          <League league={league} />
        </>
      </div>
      <Match />
    </div>
  );
};

export default Userinfo;
