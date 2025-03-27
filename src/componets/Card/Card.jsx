import "./Card.css";
function Card(card) {
  console.log(card.card.title);
  return (
    <div className="card">
      <img src={card.card.url} alt={card.card.title} className="card__img" />
      <h3 className="card__title">{card.card.title}</h3>
      <p className="card__description">{card.card.description}</p>
    </div>
  );
}

export default Card;
