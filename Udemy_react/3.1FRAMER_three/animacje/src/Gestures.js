import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useState } from "react";

const Gestures = () => {
  return (
    <div className="box">
      <MotionConfig //teraz każdy element dziedziczy animacje
        whileHover={{
          scale: 1.05,
          rotate: "5deg",
          transition: { duration: 0.25 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.button />
        <motion.button>drugi</motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
