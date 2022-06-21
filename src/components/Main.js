import Card from "./Card";

function Main({userStats, onEditAvatar, onEditProfile, onAddPlace, cards }) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userStats.userAvatar} alt="Аватарка" />
          <button className="profile__avatar-button"
            type="button"
            onClick={onEditAvatar}>
          </button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">
            {userStats.userName}
          </h1>
          <button className="profile__redaction"
            type="button"
            onClick={onEditProfile}>
          </button>
          <p className="profile__about">
            {userStats.userDescription}
          </p>
        </div>
        <button className="profile__add-button"
          type="button"
          onClick={onAddPlace}>
        </button>
      </section>

      <section className="cards">
        {cards.map((card) =>
          <Card
            key={card._id}
            link={card.link}
            name={card.name}
            likes={card.likes}
          />
        )}
      </section>
    </main>
  );
}

export default Main;
