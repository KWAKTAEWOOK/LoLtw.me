import React from "react";

const League = (leagues, index) => {
  console.log(leagues);
  console.log(leagues);
  console.log(leagues.leagues.rank);
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
            {(leagues &&
              (leagues.queueType === "RANKED_FLEX_SR"
                ? "자유 랭크"
                : "솔로 랭크")) ||
              "솔로 랭크"}
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
                    (leagues[0].wins / (leagues[0].wins + leagues[0].losses)) *
                    100
                  ).toFixed(2)}
              </div>
            </>
          )) ||
            "Unranked"}
        </div>
      </div>
    </div>
  );
};

export default League;
