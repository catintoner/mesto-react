import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body class="page">
      <div class="container">
        <header class="header">
          <img class="header__logo" src="<%=require('./images/Logo.png')%>" alt="Логотип" />
        </header>

        <main class="content">
          <section class="profile">
            <div class="profile__avatar-container">
              <img class="profile__avatar" src="#" alt="Аватарка" />
              <button class="profile__avatar-button" type="button">
              </button>
            </div>
            <div class="profile__info">
              <h1 class="profile__name">
                Жак-Ив Кусто
              </h1>
              <button class="profile__redaction" type="button">
              </button>
              <p class="profile__about">
                Исследователь океана
              </p>
            </div>
            <button class="profile__add-button" type="button">
            </button>
          </section>

          <section class="cards">
          </section>
        </main>

        <footer class="footer">
          <p class="footer__copyright">
            &copy; 2022 Mesto Russia
          </p>
        </footer>

      </div>

      <section class="popup popup_type_edit-profile">
        <button class="popup__exit" type="button">
        </button>
        <form class="popup__container" name="profile-edit" novalidate>
          <h3 class="popup__title">
            Редактировать профиль
          </h3>
          <input class="popup__input" id="profile-name" name="name" minlength="2" maxlength="40" type="text"
            placeholder="Имя" required autocomplete="off" />
          <span class="popup__error profile-name-error">
          </span>
          <input class="popup__input" id="profile-about" name="about" minlength="2" maxlength="200" type="text"
            placeholder="О себе" required autocomplete="off" />
          <span class="popup__error profile-about-error">
          </span>
          <button class="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </section>

      <section class="popup popup_type_add-card">
        <button class="popup__exit" type="button">
        </button>
        <form class="popup__container" name="add-card" novalidate>
          <h3 class="popup__title">
            Новое место
          </h3>
          <input class="popup__input" id="place" name="name" type="text" minlength="2" maxlength="30" placeholder="Название"
            required autocomplete="off" />
          <span class="popup__error place-error">
          </span>
          <input class="popup__input" id="link" name="link" type="url" placeholder="Ссылка на картинку" required
            autocomplete="off" />
          <span class="popup__error link-error">
          </span>
          <button class="popup__submit-btn" type="submit">
            Создать
          </button>
        </form>
      </section>

      <section class="popup popup_type_picture">
        <button class="popup__exit popup__exit_type_picture" type="button">
        </button>
        <figure class="popup__figure">
          <img class="popup__image" src="#" alt="Картинка" />
          <figcaption class="popup__caption">
          </figcaption>
        </figure>
      </section>

      <section class="popup popup_type_delete-card">
        <button class="popup__exit" type="button">
        </button>
        <form class="popup__container" novalidate>
          <h3 class="popup__title popup__title_type_delete">
            Вы уверены?
          </h3>
          <button class="popup__submit-btn" type="submit">
            Да
          </button>
        </form>
      </section>

      <section class="popup popup_type_edit-avatar">
        <button class="popup__exit" type="button">
        </button>
        <form class="popup__container" name="edit-avatar">
          <h3 class="popup__title">
            Обновить аватар
          </h3>
          <input class="popup__input" id="avatar" name="avatar" type="url" placeholder="Ссылка на картинку" required
            autocomplete="off" />
          <span class="popup__error avatar-error">
          </span>
          <button class="popup__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </section>

      <template id="template__card">
        <article class="card">
          <img class="card__photo" src="#" alt="Картинка" />
          <div class="card__info">
            <h2 class="card__title">
            </h2>
            <div class="card__likes">
              <button class="card__btn-like" type="button">
              </button>
              <p class="card__likes-counter">
              </p>
            </div>
          </div>
          <button class="card__trash" type="button">
          </button>
        </article>
      </template>

    </body>
  );
}

export default App;
