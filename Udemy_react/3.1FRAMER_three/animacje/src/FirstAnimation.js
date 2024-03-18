import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FirstAnimation = () => {
  const [isHide, setIsHide] = useState(true);
  return (
    <div className="box">
      {/* layout pozwala na powolne zejscie do miescja gdzie ma sie znajdowac */}
      <motion.button onClick={() => setIsHide(!isHide)} layout>
        Hide/ Show
      </motion.button>
      <AnimatePresence mode="popLayout">
        {" "}
        {isHide && (
          <motion.div
            className="item"
            initial={{ rotate: "0deg", scale: 0, y: 0 }}
            animate={{ rotate: "180deg", scale: 1, y: [0, 150, -150, -150, 0] }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.25, 0.5, 0.95, 1], //time stamply dla animacji zalezne od duration
            }}
          ></motion.div>
        )}
      </AnimatePresence>
      {/* AnimatePresence pozwala na animcaje gdy element ma zniknąć */}
    </div>
  );
};
export default FirstAnimation;
