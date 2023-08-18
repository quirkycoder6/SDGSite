import Topbar from "./Components/topbar/Topbar.jsx";
import Home from "./Components/home/Home.jsx";
import SDGs from "./Components/sdgs/SDGs.jsx";
import Contact from "./Components/contact/Contact.jsx";
import "./App.scss";
import { useState } from "react";
import Menu from "./Components/menu/Menu.jsx";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home/>
        <SDGs/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
