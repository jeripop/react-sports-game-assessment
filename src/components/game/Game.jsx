import React from "react";
import Team from "../team/Team.js";
import Scoreboard from "../scoreboard/Scoreboard.js";
import dribbleSound from "../../assets/sounds/Bounces.wav";
import scoredSound from "../../assets/sounds/Back+Board.wav";

export default class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,

      homeTeamStats: {
        shots: 0,
        score: 0,
      },

      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    };

    this.shotSound = new Audio(dribbleSound);
    this.scoreSound = new Audio(scoredSound);
  }

  shoot = (team) => {
    let teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }
    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };

  render() {
    return (
      <div id="Game">
        <Scoreboard
          visitingTeamStats={this.state.visitingTeamStats}
          homeTeamStats={this.state.homeTeamStats}
        />
        <h1>Welcome to {this.props.venue}</h1>
        <div id="stats">
          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            shotHandler={() => this.shoot("home")}
          />

          <div id="versus">
            <h1>VS</h1>
            <div>
              <strong>Resets:</strong>
              {this.state.resetCount}
              <button onClick={this.resetGame}>Reset Game</button>
            </div>
          </div>

          <Team
            name={this.props.visitingTeam.name}
            logo={this.props.visitingTeam.logoSrc}
            stats={this.state.visitingTeamStats}
            shotHandler={() => this.shoot("visiting")}
          />
        </div>
      </div>
    );
  }
}
