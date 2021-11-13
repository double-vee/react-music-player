import { useState } from "react";
import "./styles/app.scss";
import data from "./data";
import Player from "./components/Player";
import Track from "./components/Track";

function App() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setcurrentTrack] = useState(tracks[0]);

  return (
    <div className="app-wrapper">
      <Track currentTrack={currentTrack} />
      <Player />
    </div>
  );
}

export default App;
