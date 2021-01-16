import { useSequencer } from "react-sequencer";
import Typewriter from "typewriter-effect";

import styles from "./styles.css";
import { useWindupString } from "windups";
// Make a new component
const StringyWindup = ({ query }) => {
  const [text] = useWindupString(query, { pace: () => 40 });
  return <div style={{ textAlign: "center" }}>img.png?{text}</div>;
};

import React from "react";
export default function Home() {
  const steps = [
    [["animationOne", "s.grayscale=true"], 7000],
    [["animationTwo", "w=420"], 7000],
    [["animationThree", "w=320"], 7000],
    [["animationFour", "rotate=90"], 7000],
    [["animationSix", "crop=200,200,400,400"], 7000],
  ];
  const [state, animation] = useSequencer({
    steps,
    endMode: "loop",
  });
  animation.play();

  return (
    <div>
      <div className={styles.animationContainer}>
        <div className={state.current[0]}></div>
        <div className="textContainer">
          <div className="typewriterText">
            <StringyWindup query={state.current[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}
