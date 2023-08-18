import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#home">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#sdgs-gal">Gallery</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#indicator-container1">Poverty Indicator</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#indicator-container2">Gender Equality Indicator</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#indicator-container3">Education Indicator</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#communicate">Communicate</a>
        </li>
      </ul>
    </div>
  )
}
