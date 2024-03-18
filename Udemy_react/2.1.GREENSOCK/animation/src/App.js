import { useRef, useEffect } from "react";
import "./index.css";
import gsap from "gsap";
import { Power1, Power3 } from "gsap";

function App() {
  let rotate = useRef(null);
  let raise = useRef(null);

  const color = () =>
    gsap.fromTo(
      ".circle",
      { x: -40, fill: "green" },
      { x: 40, fill: "yellow" }
    );
  useEffect(() => {
    gsap.to(rotate, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: Power3.easeInOut,
    });
    gsap.to(raise, {
      opacity: 1,
      y: -40,
      duration: 1,
      ease: Power3.easeInOut,
    });
    gsap.to(".rows", {
      duration: 1,
      scale: 1,
      y: 40,
      ease: "power1.inOut",
      stagger: {
        grid: [7, 15],
        from: "start",
        amount: 1.5,
      },
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div
          className="square"
          ref={(el) => {
            rotate = el;
          }}
        ></div>

        <p
          ref={(el) => {
            raise = el;
          }}
        >
          siemanko
        </p>
        <div className="circle" onClick={color}>
          d
        </div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="blok">
        <div className="rows"></div>
        <div className="rows"></div>
        <div className="rows"></div>
        <div className="rows"></div>
        <div className="rows"></div>
        <div className="rows"></div>
        <div className="rows"></div>
        <div className="rows"></div>
        <div className="rows"></div>
      </div>
    </div>
  );
}

export default App;
