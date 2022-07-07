import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CurrentCardContext } from "../contexts/CurrentCardContext";

import React from "react";


import { api } from "../utils/Api";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);


  //new project

  const [currentUser, setCurrentUser] = React.useState({ name: "", about: "", avatar: "" });
  const [cards, setCards] = React.useState([]);

  // const [ likedCard, setLikedCard ] = React.useState({});



  React.useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then(([userInfo, cards]) => {
        setCurrentUser(userInfo);
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

  function onCardLike(props) {
    setCards(props);
  }

  function onTrashClick(props) {
    setCards(props);
  }


  function handleUpdateUser(userData) {
    api.setUserInfo(userData)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
      })

      .catch(err => {
        console.log(err);
      });

    closeAllPopups();
  }

  function handleUpdateAvatar(avatarLink) {
    api.editAvatar(avatarLink)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
      })

      .catch(err => {
        console.log(err);
      });

    closeAllPopups();
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardContext.Provider value={cards}>
        <div className="page">
          <div className="container">
            <Header />

            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onCardLike={onCardLike}
              onTrashClick={onTrashClick}
            />

            <Footer />

            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
            />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />

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

          </div>
        </div>
      </CurrentCardContext.Provider>
    </CurrentUserContext.Provider>
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
