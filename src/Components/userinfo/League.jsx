import React from "react";

const League = ({ leagues, index }) => {
  console.log("map으로 받음", leagues);

  return (
    <div>
      <div className="rankbox">
        <div className="rankimg">
          <img src={`/images/${leagues.tier || "Unranked"}.png`} alt="" />
          <div className="level">
            {leagues.tier === "MASTER" ||
            leagues.tier === "CHALLENGER" ||
            leagues.tier === "GRANDMASTER"
              ? null
              : leagues.rank}
          </div>
        </div>
        <div className="rankinfo">
          <div>
            {(leagues.queueType === "RANKED_FLEX_SR"
              ? "자유 랭크"
              : "솔로 랭크") || "솔로 랭크"}
          </div>
          {(leagues && (
            <>
              <div>{leagues.leaguePoints + "LP"} </div>
              <div>
                {leagues.wins + "승 "}
                {leagues.losses + "패"}
              </div>
              <div>
                {"승률 " +
                  (
                    (leagues.wins / (leagues.wins + leagues.losses)) *
                    100
                  ).toFixed(2)}
              </div>
            </>
          )) ||
            "Unranked"}
        </div>
      </div>

      {leagues[1] && (
        <div className="rankbox">
          <div className="rankimg">
            <img src={`/images/Unranked.png`} alt="" />
            <div className="level">{leagues && null}</div>
          </div>
          <div className="rankinfo">
            <div>{leagues && "자유 랭크"}</div>
            {leagues && "Unranked"}
          </div>
        </div>
      )}
    </div>
  );
};

export default League;
