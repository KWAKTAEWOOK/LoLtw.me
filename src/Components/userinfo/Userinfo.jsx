import React, { useState, useEffect } from "react";
import "../userinfo/userinfo.css";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { langState, userState } from "../../recoil";
import axios from "axios";
const Userinfo = () => {
  const [lol, setlol] = useRecoilState(userState);
  const [lang, setlang] = useRecoilState(langState);
  const [league, setleague] = useState("");
  useEffect(() => {
    const getleague = async (e) => {
      try {
        const league = await axios({
          url: `https://${lang}.api.riotgames.com/lol/league/v4/entries/by-summoner/${lol.id}?api_key=RGAPI-8ec036a1-28ee-49bf-a6c3-ebae2c8080b9`,
          method: "get",
        });

        setleague(league.data);
      } catch (e) {
        alert("값 입력 실패");
        console.log({});
      }
    };
    getleague();
  }, []);
  console.log(league);
  console.log(lol);
  console.log(lang);
  return (
    <div>
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
              <button className="updatebut">업데이트</button>
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

        <div className="rankbox">
          <div className="rankimg">
            <img
              src={`/images/${(league[0] && league[0].tier) || "Unranked"}.png`}
              alt=""
            />
            <div className="level">
              {league[0] &&
                (league[0].tier === "MASTER" ||
                league[0].tier === "CHALLENGER" ||
                league[0].tier === "GRANDMASTER"
                  ? null
                  : league[0].rank)}
            </div>
          </div>
          <div className="rankinfo">
            <div>
              {(league[0] &&
                (league[0].queueType === "RANKED_FLEX_SR"
                  ? "자유 랭크"
                  : "솔로 랭크")) ||
                "솔로 랭크"}
            </div>
            {(league[0] && (
              <>
                <div>{league[0] && league[0].leaguePoints + "LP"} </div>
                <div>
                  {league[0] && league[0].wins + "승 "}
                  {league[0] && league[0].losses + "패"}
                </div>
                <div>
                  {league[0] &&
                    "승률 " +
                      (
                        (league[0].wins / (league[0].wins + league[0].losses)) *
                        100
                      ).toFixed(2)}
                </div>
              </>
            )) ||
              "Unranked"}
          </div>
        </div>

        <div className="rankbox">
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
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
