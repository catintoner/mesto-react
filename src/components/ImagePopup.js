function ImagePopup() {
  return (
    <section className="popup popup_type_picture">
      <button className="popup__exit popup__exit_type_picture" type="button">
      </button>
      <figure className="popup__figure">
        <img className="popup__image" src="#" alt="Картинка" />
        <figcaption className="popup__caption">
        </figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
