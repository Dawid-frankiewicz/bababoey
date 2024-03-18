import "./Services.scss";
import people from "./people.webp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  // uzyj gdy jest -100px od sekcjmi

  const list = [
    {
      id: 1,
      name: "lista1",
      description:
        "Lorem ipsum dolor sit amet,   ngilla, ligula velit finibus est, ac lacinia magna quam vel lorem. Cras nibh tellus,",
    },
    {
      id: 2,
      name: "lista1",
      description:
        "Lorem ipsum dolor sit amet,   ngilla, ligula velit finibus est, ac lacinia magna quam vel lorem. Cras nibh tellus,",
    },
    {
      id: 3,
      name: "lista1",
      description:
        "Lorem ipsum dolor sit amet,   ngilla, ligula velit finibus est, ac lacinia magna quam vel lorem. Cras nibh tellus,",
    },
    {
      id: 4,
      name: "lista1",
      description:
        "Lorem ipsum dolor sit amet,   ngilla, ligula velit finibus est, ac lacinia magna quam vel lorem. Cras nibh tellus,",
    },
  ];

  const variants = {
    initial: { x: -100, y: 100, opacity: 0 },
    //x=-500 nie moze byc bo przy malym ekranie nie lapie
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="container"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView ? "animate" : "initial"} //wustarczy ustawic na initial gdy wyjdzie z widoky
      //nieco lepsze od while
      // whileInView="animate"
      //zamiast animate uzywamy whileinview i dziala
    >
      <motion.div className="titleContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="textContainer" variants={variants}>
        <img src={people} alt="" />
        <motion.b id="onHover">Unique</motion.b>
        ideas
        <br />
        <motion.b id="onHover">for you</motion.b>Business{" "}
        <button>What we do?</button>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {list.map((element) => (
          <div className="blok" key={element.id}>
            <h3>{element.name}</h3>
            <p>{element.description}</p>
            <button>go</button>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
