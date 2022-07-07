import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CurrentCardContext } from "../contexts/CurrentCardContext";

function Card(props) {

  const currentUserInfo = React.useContext(CurrentUserContext);
  const currentCards = React.useContext(CurrentCardContext);

  const isOwn = props.ownerId === currentUserInfo._id;
  const isOwnLiked = props.likes.some(i => i._id === currentUserInfo._id);

  const cardDeleteButtonClassName = (
    `card__trash ${(!isOwn) ? 'card__trash_type_hidden' : ""}`
  );
  const cardLikeButtonClassName = (
    `card__btn-like ${isOwnLiked ? 'card__btn-like_status_active' : ""}`
  );

  function handleClick() {
    props.onCardClick({ link: props.link, name: props.name })
  }

  function handleLikeClick() {
    props.onCardLike(props);
  }

  function handleDeleteClick() {
    props.onCardDelete(props)
  }

  return (
    <article className="card">
      <img className="card__photo"
        src={props.link}
        alt={props.name}
        onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">
          {props.name}
        </h2>
        <div className="card__likes">
          <button className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          >
          </button>
          <p className="card__likes-counter">
            {props.likes.length}
          </p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      >
      </button>
    </article>
  );
}

export default Card;
