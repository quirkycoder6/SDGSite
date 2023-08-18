import Topbar from "./Components/topbar/Topbar.jsx";
import Home from "./Components/home/Home.jsx";
import SDGs from "./Components/sdgs/SDGs.jsx";
import Communicate from "./Components/communicate/Communicate.jsx";
import SDGIndicator1 from "./Components/sdgIndicator1/SDGIndicator1.jsx";
import SDGIndicators2 from "./Components/sdgIndicator2/SDGIndicator2.jsx";
import SDGIndicator3 from "./Components/sdgIndicator3/SDGIndicator3.jsx";
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
        <SDGIndicator1/>
        <SDGIndicators2/>
        <SDGIndicator3/>
        <Communicate/>
      </div>
    </div>
  );
}

export default App;
