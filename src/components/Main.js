import React from "react";

import Card from "./Card";


import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CurrentCardContext } from "../contexts/CurrentCardContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onTrashClick }) {

  const currentUserInfo = React.useContext(CurrentUserContext);
  const currentCards = React.useContext(CurrentCardContext);


  function handleCardDelete(card) {
    api.deleteCard(card.cardId)
      .then(() => {
        onTrashClick((state) => {
          return state.filter(item => item._id !== card.cardId);
        });
      })
      .catch(err => {
        console.log(err);
      })

  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUserInfo._id);

    if (!isLiked) {
      api.addLike(card.cardId)
        .then((modifiedCard) => {
          onCardLike((state) => {
            return state.map(
              (c) => (
                c._id === card.cardId ? modifiedCard : c
              ))
          });
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      api.removeLike(card.cardId)
        .then((modifiedCard) => {
          onCardLike((state) => {
            return state.map(
              (c) => (
                c._id === card.cardId ? modifiedCard : c
              ))
          });
        })
        .catch(err => {
          console.log(err);
        })
    }

  }

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
            cardId={card._id}
            ownerId={card.owner._id}
            link={card.link}
            name={card.name}
            likes={card.likes}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        )}
      </section>
    </main>
  );
}

export default Main;
