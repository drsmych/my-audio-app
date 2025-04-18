import React, { useState, useEffect } from "react";
import { PlasmicHomepage } from "./plasmic/daily/PlasmicHomepage";

export default function Homepage() {
  const [prompt, setPrompt] = useState("Welcome! Ready to begin?");
  const [audioFile, setAudioFile] = useState("/media/greeting.mp3");

  useEffect(() => {
    const audio = new Audio(audioFile);
    audio.play();
  }, [audioFile]);

  const handleButtonClick = (choice) => {
    if (choice === "A") {
      setPrompt("You chose A. Here's something new.");
      setAudioFile("/media/response-a.mp3");
    } else if (choice === "B") {
      setPrompt("B triggered a replay.");
      setAudioFile((prev) => prev); // replays same
    } else if (choice === "C") {
      setPrompt("Going back...");
      setAudioFile("/media/back.mp3");
    } else if (choice === "D") {
      setPrompt("Mysterious path...");
      setAudioFile("/media/secret.mp3");
    }
  };

  return (
    <PlasmicHomepage
      promptText={{
        children: prompt,
      }}
      buttonA={{
        onClick: () => handleButtonClick("A"),
      }}
      buttonB={{
        onClick: () => handleButtonClick("B"),
      }}
      buttonC={{
        onClick: () => handleButtonClick("C"),
      }}
      buttonD={{
        onClick: () => handleButtonClick("D"),
      }}
    />
  );
}
