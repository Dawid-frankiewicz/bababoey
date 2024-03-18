import { motion, useScroll, useTransform } from "framer-motion";
import "./Parralax.scss";
import { useRef } from "react";
const Parallax = ({ type }) => {
  const ref = useRef("xs");
  const { scrollYProgress } = useScroll({
    //musi być scrollYProgress
    target: ref,
    offset: ["start start", "end start"],
    //zacznij przy wejsciu do sekcji i skonczy przy wejsciu do koljenje
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  //gdy bedziemy na 1 to połozenie y będzie n1 500% dlatego -500 %up
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #1d1d52, #0c0c1d)"
            : "linear-gradient(180deg, #1d1d52, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What we Do?" : "What we Did?"}
      </motion.h1>

      <motion.div className="stars" style={{ x: yBg }}></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="mountains"></motion.div>
    </div>
  );
};
export default Parallax;
