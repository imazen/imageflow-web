import { useSequencer } from "react-sequencer";
import Typewriter from "typewriter-effect";

import styles from "./styles.css";

import React from "react";
export default function Home() {
  console.log(styles);
  const steps = [
    ["animationOne", 7000],
    ["animationTwo", 7000],
    ["animationThree", 7000],
    ["animationFour", 7000],
    ["animationFive", 7000],
    ["animationSix", 7000],
  ];
  const [state, animation] = useSequencer({
    steps,
    endMode: "loop",
  });
  animation.play();

  const textOne = (
    <Typewriter
      options={{
        strings: ["This Effect is Greyscale."],
        autoStart: true,
        pauseFor: 20000,
      }}
    />
  );
  const textTwo = (
    <Typewriter
      options={{
        strings: ["This Effect is Zoom In."],
        autoStart: true,
        pauseFor: 20000,
      }}
    />
  );
  const textThree = (
    <Typewriter
      options={{
        strings: ["This Effect is Zoom Out."],
        autoStart: true,
        pauseFor: 20000,
      }}
    />
  );
  const textFour = (
    <Typewriter
      options={{
        strings: ["This Effect is Rotation."],
        autoStart: true,
        pauseFor: 20000,
      }}
    />
  );
  const textFive = (
    <Typewriter
      options={{
        strings: ["This Effect is Border."],
        autoStart: true,
        pauseFor: 20000,
      }}
    />
  );
  const textSix = (
    <Typewriter
      options={{
        strings: ["This Effect is Image Positioning."],
        autoStart: true,
        pauseFor: 20000,
      }}
    />
  );

  return (
    <div>
      <div className={styles.animationContainer}>
        <div className={state.current}></div>
        <div className="textContainer">
          <div className="typewriterText">
            {state.current == "animationOne"
              ? textOne
              : state.current == "animationTwo"
              ? textTwo
              : state.current == "animationThree"
              ? textThree
              : state.current == "animationFour"
              ? textFour
              : state.current == "animationFive"
              ? textFive
              : textSix}
          </div>
        </div>
      </div>
    </div>
  );
}
