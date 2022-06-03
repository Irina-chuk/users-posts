import "./form.scss";
const Form = ({showModal, setShowModal, children}) => {
    const classForm = showModal ? "modal modal_active" : "modal";
    return (
        <div className={classForm} onClick={() => setShowModal(false)}>
            <div className="modal__content" onClick={e=> e.stopPropagation()}>
                {children}
            </div>
            
        </div>
        
    )
}

export default Form;