import { useState } from "react";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import "./Main.css";

function Main() {
  const [cards, setcards] = useState([]);
  return (
    <main className="main">
      <About id="about"></About>
      <Portfolio id="portfolio"></Portfolio>
    </main>
  );
}

export default Main;
