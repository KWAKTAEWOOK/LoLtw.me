import React, { useState, useEffect } from "react";
import "../userinfo/userinfo.css";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { langState, userState } from "../../recoil";
import axios from "axios";
import League from "./League";
import Topbar from "../Topbar/Topbar";
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
      if (league.data != "") {
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

  useEffect(() => {
    getleague();
  }, []);
  console.log("리그정보 ", league);
  console.log(lol);
  console.log(lang);
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

        {/* <div className="rankbox">
          <div className="rankimg">
            <img
              src={`/images/${(league[1] && league[1].tier) || "Unranked"}.png`}
              alt=""
            />
            <div className="level">
              {" "}
              {league[1] &&
                (league[1].tier === "MASTER" ||
                league[1].tier === "CHALLENGER" ||
                league[1].tier === "GRANDMASTER"
                  ? null
                  : league[1].rank)}
            </div>
          </div>
          <div className="rankinfo">
            <div>
              {(league[1] &&
                (league[1].queueType === "RANKED_FLEX_SR"
                  ? "자유 랭크"
                  : "솔로 랭크")) ||
                "자유 랭크"}
            </div>
            {(league[1] && (
              <>
                <div>{league[1] && league[1].leaguePoints + "LP"} </div>
                <div>
                  {league[1] && league[1].wins + "승 "}
                  {league[1] && league[1].losses + "패"}
                </div>
                <div>
                  {league[1] &&
                    "승률 " +
                      (
                        (league[1].wins / (league[1].wins + league[1].losses)) *
                        100
                      ).toFixed(2)}
                </div>
              </>
            )) ||
              "Unranked"}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Userinfo;
