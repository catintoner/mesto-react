import React from "react";

function PopupWithForm(props) {

  React.useEffect(() => {
    if (props.isOpen) {
      function closeOnEsc(evt) {
        console.log(evt.key);
        if (evt.key === "Escape") {
          props.onClose();
        }
      }

    document.addEventListener('keydown', closeOnEsc);

    return () => {
      document.removeEventListener('keydown', closeOnEsc);
    }
  }});

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
