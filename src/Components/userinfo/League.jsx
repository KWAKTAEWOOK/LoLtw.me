import React from "react";

const League = ({ league }) => {
  function Code({ leagues, index }) {
    return (
      <>
        <div className="rankbox" key={index}>
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
            {leagues.tier === "Unranked" ? (
              "Unranked"
            ) : (
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
            )}
          </div>
        </div>

        {league[1] == undefined ? (
          <div className="rankbox">
            <div className="rankimg">
              <img src={`/images/Unranked.png`} alt="" />
              <div className="level">{null}</div>
            </div>
            <div className="rankinfo">
              <div>
                {league[0].queueType === "RANKED_FLEX_SR"
                  ? "솔로 랭크"
                  : "자유 랭크"}
              </div>
              <div>Unranked</div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
  return (
    <>
      {" "}
      {league.map((leagues, index) => (
        <Code leagues={leagues} />
      ))}
    </>
  );
};

export default League;
