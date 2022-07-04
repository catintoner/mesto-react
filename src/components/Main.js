import React from "react";

import Card from "./Card";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CurrentCardContext } from "../contexts/CurrentCardContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const currentUserInfo = React.useContext(CurrentUserContext);
  const currentCards = React.useContext(CurrentCardContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUserInfo.avatar} alt="Аватарка" />
          <button className="profile__avatar-button"
            type="button"
            onClick={onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">
            {currentUserInfo.name}
          </h1>
          <button className="profile__redaction"
            type="button"
            onClick={onEditProfile}>
          </button>
          <p className="profile__about">
            {currentUserInfo.about}
          </p>
        </div>
        <button className="profile__add-button"
          type="button"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="cards">
        {currentCards.map((card) =>
          <Card
            key={card._id}
            ownerId={card.owner._id}
            link={card.link}
            name={card.name}
            likes={card.likes}
            onCardClick={onCardClick}
          />
        )}
      </section>
    </main>
  );
}

export default Main;
