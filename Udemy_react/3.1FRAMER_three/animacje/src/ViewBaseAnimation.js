import { motion, useAnimationControls, MotionConfig } from "framer-motion";
import { useState } from "react";

const ViewBase = () => {
  return (
    <>
      <div style={{ height: "150vh" }}></div>
      <motion.div
        style={{
          height: "100vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MotionConfig
          initial={{ opacity: 0, rotate: "180deg" }}
          animate={{
            scale: 1,
            y: [0, 150, -150, -150, 0],
            opacity: 1,
            rotate: "360deg",
          }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "white",
              opacity: 0,
            }}
          >
            some tekst herr{" "}
          </motion.p>
          <motion.p
            style={{ fontSize: "2rem", fontWeight: "bold", color: "white" }}
            transition={{ duration: 1, delay: 1 }}
          >
            some tekst herr{" "}
          </motion.p>
        </MotionConfig>
      </motion.div>
    </>
  );
};
export default ViewBase;
