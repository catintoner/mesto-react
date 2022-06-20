function PopupWithForm(props) {

  return (
    <section
      className={`popup popup_type_${props.name} ${props.isOpen}`}
    >
      <button
        className="popup__exit"
        type="button"
        onClick={props.onClose}>
      </button>
      <form className="popup__container" name={props.name} noValidate>
        <h3 className="popup__title">
          {props.title}
        </h3>

        {props.children}

      </form>
    </section>
  );
}

export default PopupWithForm;
