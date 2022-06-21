function Card({ link, name, likes }) {
  return (
    <article className="card">
      <img className="card__photo" src={link} alt="Картинка" />
      <div className="card__info">
        <h2 className="card__title">
          {name}
        </h2>
        <div className="card__likes">
          <button className="card__btn-like" type="button">
          </button>
          <p className="card__likes-counter">
            {likes.length}
          </p>
        </div>
      </div>
      <button className="card__trash" type="button">
      </button>
    </article>
  );
}

export default Card;
