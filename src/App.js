import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import img0 from "./assets/images/image0.jpeg";
import img1 from "./assets/images/image1.jpeg";
import img2 from "./assets/images/image2.jpeg";
import img3 from "./assets/images/image3.jpeg";

function App() {
  let ballers = {
    name: "Ballers",
    logoSrc: img0,
  };
  let shotCallers = {
    name: "Shot Callers",
    logoSrc: img1,
  };
  let unknown = {
    name: "Unknown",
    logoSrc: img2,
  };
  let theWierdos = {
    name: "We're the Wierdos",
    logoSrc: img3,
  };
  return (
    <div className="App">
      <Game
        venue="Ballin House"
        homeTeam={ballers}
        visitingTeam={shotCallers}
      />
      <Game venue="Callin Park" homeTeam={unknown} visitingTeam={theWierdos} />)
    </div>
  );
}

export default App;
