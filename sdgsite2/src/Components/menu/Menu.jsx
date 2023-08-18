import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#home">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#sdgs">SDGs</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Communicate</a>
        </li>
      </ul>
    </div>
  )
}
