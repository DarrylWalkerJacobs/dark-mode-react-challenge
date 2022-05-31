import clsx from 'clsx';

const Modal = ({ children, isOpen, setIsOpen }) => {
  return (
    <div
      className={clsx({
          modal: true,
          fade: true,
          show: isOpen
      })}
      id="modalId"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalId">
              Form submission
            </h5>
          </div>
          <div class="modal-body">{children}</div>
          <div class="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
