import React from "react";

function App() {
  const playSound = () => {
      const audio = new Audio("/media/button-click.mp3");
      audio.play();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🔊 Audio Test</h1>
      <button onClick={playSound}>Click me to play sound</button>
    </div>
  );
}

export default App;

