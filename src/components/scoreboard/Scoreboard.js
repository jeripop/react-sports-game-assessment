import React from "react";

export default function Scoreboard(props) {
  return (
    <div id="ScoreBoard">
      <div id="teamStats">
        <h4>VISITORS</h4>
        <h3>{props.visitingTeamStats.score}</h3>
      </div>

      <h1>SCOREBOARD</h1>

      <div id="teamstats">
        <h4>HOME</h4>
        <h3>{props.homeTeamStats.score}</h3>
      </div>
    </div>
  );
}
