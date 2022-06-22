import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";


import { api } from "../utils/Api";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);



  const [userStats, setUserStats] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getInfoAboutUser(),
      api.getInitialCards()
    ])
      .then(([user, cards]) => {

        setUserStats({
          userName: user.name,
          userDescription: user.about,
          userAvatar: user.avatar
        });

        setCards(cards);
      })

      .catch((err) => {
        console.log(err);
      })
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(props) {
    setSelectedCard(props);
  }

  return (
    <div className="page">
      <div className="container">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          userStats={userStats}
          cards={cards}
          onCardClick={handleCardClick}
        />

        <Footer />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonSubmitText="Сохранить"
        >
          <>
            <input className="popup__input" id="profile-name" name="name" minLength="2" maxLength="40" type="text"
              placeholder="Имя" required autoComplete="off" />
            <span className="popup__error profile-name-error">
            </span>
            <input className="popup__input" id="profile-about" name="about" minLength="2" maxLength="200" type="text"
              placeholder="О себе" required autoComplete="off" />
            <span className="popup__error profile-about-error">
            </span>
          </>
        </PopupWithForm>

        <PopupWithForm
          name="add-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonSubmitText="Создать"
        >
          <>
            <input className="popup__input" id="place" name="name" type="text" minLength="2" maxLength="30" placeholder="Название"
              required autoComplete="off" />
            <span className="popup__error place-error">
            </span>
            <input className="popup__input" id="link" name="link" type="url" placeholder="Ссылка на картинку" required
              autoComplete="off" />
            <span className="popup__error link-error">
            </span>
          </>
        </PopupWithForm>

        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonSubmitText="Сохранить"
        >
          <>
            <input className="popup__input" id="avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required
              autoComplete="off" />
            <span className="popup__error avatar-error">
            </span>
          </>
        </PopupWithForm>

      </div>
    </div>
  );
}

export default App;

{/* <section className="popup popup_type_delete-card">
<button className="popup__exit" type="button">
</button>
<form className="popup__container" name="delete-card" noValidate>
  <h3 className="popup__title popup__title_type_delete">
    Вы уверены?
  </h3>
  <button className="popup__submit-btn" type="submit">
    Да
  </button>
</form>
</section> */}
