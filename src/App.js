import { useState } from "react";
import "./styles/app.scss";
import data from "./data";
import Player from "./components/Player";
import Track from "./components/Track";
import Library from "./components/Library";

function App() {
  const [tracks, setTracks] = useState(data());
  const [currentTrack, setcurrentTrack] = useState(tracks[0]);

  return (
    <div className="app-wrapper">
      <Track currentTrack={currentTrack} />
      <Player currentTrack={currentTrack} />
      <Library tracks={tracks} setcurrentTrack={setcurrentTrack} />
    </div>
  );
}

export default App;
