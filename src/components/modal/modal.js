import "./modal.scss";
const Modal = ({showModal, setShowModal, children}) => {
    const classForm = showModal ? "modal modal_active" : "modal";
    return (
        <div className={classForm} onClick={() => setShowModal(false)}>
            <div className="modal__content" onClick={e=> e.stopPropagation()}>
                {children}
            </div>
            
        </div>
        
    )
}

export default Modal;