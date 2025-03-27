import { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import portfolioData from "../../data/porfolio.json";
import "./Portfolio.css";
function Portfolio() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(portfolioData);
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__heading">Portfolio</h2>
      <ul className="portfolio__list">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
}
export default Portfolio;
