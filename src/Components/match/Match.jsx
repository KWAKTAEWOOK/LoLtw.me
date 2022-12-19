import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { langState, userState } from "../../recoil";
import { API_key } from "../../utils";
import "../match/match.css";

const Match = () => {
  const [lol, setlol] = useRecoilState(userState);
  const [langs, setlangs] = useRecoilState(langState);

  return (
    <div>
      <div className="matchbox">
        <div className={false ? `matchwin` : `matchlost`}>
          <div className={false ? `gametimewin` : `gametimelost`}>
            <div>승리</div>
            <div>게임시간</div>
          </div>
          <div className="championbox">
            <div className="champion">
              <div>
                <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Riven.png" />
              </div>
              <div className="레벨">18</div>
            </div>
            <div className="spell">
              <div>
                <img src="http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/SummonerDot.png" />
                <img src="http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/SummonerFlash.png" />
              </div>
            </div>
            <div className="runes">
              <div>
                <img src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png" />

                <img src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png" />
              </div>
            </div>
            <div className="KDAinof">
              <div className="KDA">
                <div>{10} </div>
                <div className="슬레쉬">&nbsp;{"/"}&nbsp;</div>
                <div className="deaths">{2}</div>
                <div className="슬레쉬">&nbsp;{"/"}</div>
                <div>&nbsp;{8}</div>
              </div>
              <div className="평점">
                {((10 + 8) / 2).toFixed(2) + " : 평점"}
              </div>
            </div>
          </div>
          <div className="item">
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/6630.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3071.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/6333.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3074.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3026.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3158.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3364.png" />
            </div>
          </div>
        </div>
      </div>
      <div className="matchbox">
        <div className={true ? `matchwin` : `matchlost`}>
          <div className={true ? `gametimewin` : `gametimelost`}>
            <div>승리</div>
            <div>게임시간</div>
          </div>
          <div className="championbox">
            <div className="champion">
              <div>
                <img src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Riven.png" />
              </div>
              <div className="레벨">18</div>
            </div>
            <div className="spell">
              <div>
                <img src="http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/SummonerDot.png" />
                <img src="http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/SummonerFlash.png" />
              </div>
            </div>
            <div className="runes">
              <div>
                <img src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png" />

                <img src="https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png" />
              </div>
            </div>
            <div className={true ? `KDAinof` : `KDAee`}>
              <div className="KDA">
                <div>{10} </div>
                <div className="슬레쉬">&nbsp;{"/"}&nbsp;</div>
                <div className="deaths">{2}</div>
                <div className="슬레쉬">&nbsp;{"/"}</div>
                <div>&nbsp;{8}</div>
              </div>
              <div className="평점">
                {((10 + 8) / 2).toFixed(2) + " : 평점"}
              </div>
            </div>
          </div>
          <div className="item">
            <div>
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/6630.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3071.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/6333.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3074.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3026.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3158.png" />
            </div>
            <div>
              {" "}
              <img src="https://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/3364.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
