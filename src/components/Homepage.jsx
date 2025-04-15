import React, { useState, useEffect } from "react";
import { PlasmicHomepage } from "../plasmic/plasmic__Homepage";

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

// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
//import * as React from "react";
//import { PlasmicHomepage } from "./plasmic/app_starter/PlasmicHomepage";

//function Homepage_(props, ref) {
  // Use PlasmicHomepage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all HomepageProps here, but feel free
  // to do whatever works for you.
//  return <PlasmicHomepage root={{ ref }} {...props} />;
//}

//const Homepage = React.forwardRef(Homepage_);

//export default Homepage;
