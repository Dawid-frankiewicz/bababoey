import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const AnimationCont = () => {
  const animacja = useAnimationControls();

  const OnAnimation = () => {
    animacja.start("flip");
  };
  return (
    <div className="box">
      <button onClick={OnAnimation}>click</button>
      <motion.div
        className="item"
        animate={animacja}
        variants={{ initial: { rotate: "0deg" }, flip: { rotate: "360deg" } }}
      ></motion.div>
    </div>
  );
};

export default AnimationCont;
