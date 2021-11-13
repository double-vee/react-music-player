import "./styles/app.scss";
import data from "./data";
import Player from "./components/Player";
import Track from "./components/Track";

function App() {
  return (
    <div className="App">
      <Track />
      <Player />
    </div>
  );
}

export default App;
