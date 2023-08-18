import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 100,
      strings: ["Poverty Eradication", "Better Education", "Gender Equality"],
    });
  }, []);

  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img
            src="assets/images/sdgFull-logo.png"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Creating a Sustainable Space,</h1>
          <h2>For our future generations to come</h2>
          <h3>
            We aim for <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#sdgs-gal">
          <img src="assets/images/scrolldown-icon.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}
