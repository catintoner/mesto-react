import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUserInfo = React.useContext(CurrentUserContext);

  const isOwn = props.ownerId === currentUserInfo._id;
  const isOwnLiked = props.likes.some(i => i._id === currentUserInfo._id);

  const cardDeleteButtonClassName = (
    `card__trash ${(!isOwn) ? 'card__trash_type_hidden' : ""}`
  );
  const cardLikeButtonClassName = (
    `card__btn-like ${isOwnLiked ? 'card__btn-like_status_active' : "" }`
  );

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
          <button className={cardDeleteButtonClassName} type="button">
          </button>
          <p className="card__likes-counter">
            {props.likes.length}
          </p>
        </div>
      </div>
      <button className={cardLikeButtonClassName} type="button">
      </button>
    </article>
  );
}

export default Card;
