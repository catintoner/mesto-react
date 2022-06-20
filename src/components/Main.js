function Main(props) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="#" alt="Аватарка" />
          <button className="profile__avatar-button"
                  type="button"
                  onClick={props.onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">
            Жак-Ив Кусто
          </h1>
          <button className="profile__redaction"
                  type="button"
                  onClick={props.onEditProfile}>
          </button>
          <p className="profile__about">
            Исследователь океана
          </p>
        </div>
        <button className="profile__add-button"
                type="button"
                onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="cards">
      </section>
    </main>
  );
}

export default Main;
