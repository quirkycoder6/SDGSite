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
            src="https://publicadministration.un.org/unpsa/portals/5/Images/SDG_logo_with_UN_Emblem.png"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Creating a Sustainable Space,</h2>
          <h1>For our future generations to come</h1>
          <h3>
            We aim for <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#sdgs">
          <img src="assets/scrolldown-icon.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}
