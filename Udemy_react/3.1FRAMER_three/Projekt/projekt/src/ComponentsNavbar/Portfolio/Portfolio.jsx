import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import "./Portfolio.scss";
function Portfolio({ type }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  //śledzenie przeiwjania na elemencie , przyjmuje wartośc od 0 do 1
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  //służy do transformacji zalezdnie od funcji w tym przypadku od przewijania
  //dla 0 nadaje wartość 0% dla 1 100%\\

  //   Pierwsza wartość "start start" oznacza, że przewijanie jest monitorowane od początku elementu docelowego w poziomie i pionie, co oznacza, że jest to górny lewy róg elementu.
  // Druga wartość "end start" oznacza, że przewijanie jest monitorowane od końca elementu docelowego w poziomie i od początku w pionie, co oznacza, że jest to dolny lewy róg element
  return (
    <div
      className="containerPortfolio"
      style={
        type === "portfolio1" || type === "portfolio3"
          ? { background: "linear-gradient(180deg, #0c0c1d, #1d1d52)" }
          : { background: "linear-gradient(180deg, #1d1d52, #0c0c1d)" }
      }
    >
      <div className="titlePortfolio">
        <p>Featured Works</p>
      </div>

      <div className="grid">
        <div className={type} ref={ref}></div>
        <motion.div className="textPortfolio" style={{ y }}>
          <h1>
            {type === "portfolio1" && "Next Blog"}
            {type === "portfolio2" && "Music"}
            {type === "portfolio3" && "Games"}
            {type === "portfolio4" && "D&D"}
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here
          </p>
          <button>Click here</button>
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
