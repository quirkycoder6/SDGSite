import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            <img src="../../../public/assets/images/sdgHome-logo.svg" alt="home logo" />
          </a>
          <div className="itemContainer">
            <div className="icon">
              <span>+91 9645213567</span>
            </div>
          </div>
          <div className="itemContainer">
            <div className="link">
              <a href="https://sdgs.un.org/goals">Visit official site</a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburgerIcon" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
