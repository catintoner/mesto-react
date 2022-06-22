function Card(props) {

  function handleClick() {
    props.onCardClick({link: props.link, name: props.name})
  }

  return (
    <article className="card">
      <img className="card__photo"
           src={props.link}
           alt={props.name}
           onClick={handleClick}/>
      <div className="card__info">
        <h2 className="card__title">
          {props.name}
        </h2>
        <div className="card__likes">
          <button className="card__btn-like" type="button">
          </button>
          <p className="card__likes-counter">
            {props.likes.length}
          </p>
        </div>
      </div>
      <button className="card__trash" type="button">
      </button>
    </article>
  );
}

export default Card;
