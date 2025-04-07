import "./Card.css";
function Card(card) {
  console.log(card.card.title);
  return (
    <a
      href={card.card.url_repo}
      className="card__link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card">
        <img src={card.card.url} alt={card.card.title} className="card__img" />
        <div className="card__content">
          <h3 className="card__title">{card.card.title}</h3>
          <p className="card__description">{card.card.description}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
