import "./App.css";

/**
 * Replace this with your Game ID. Get it from your game's share link.
 */
const GAME_ID = "S27624-55361-60357-84470";

function App() {
  const params = [
    "fullscreen=1",
    "single=1",
    "nofooter=1",
    "autofocus=1",
    //"hideSimButtons=1",
    //"simParams=noExtraPadding=1",
    // TODO: Include custom simulator colors, etc.
  ].join("&");

  return (
    <div className="App">
      <iframe
        className="sim"
        src={`https://arcade.makecode.com/--run?${params}&id=${GAME_ID}`}
        sandbox="allow-popups allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
}

export default App;
