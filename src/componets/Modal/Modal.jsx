import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  return (
    <div className={`modal ${isOpen === "preview" && "modal_opened"}`}>
      <div className="modal__container modal__preview">
        <button className="modal__close" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
