import React from "react";
import Modal from "react-modal";

function AuthModal() {
  let subtitle;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        class="modal fade"
        id="authModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-backdrop="static"
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center" id="exampleModalLabel">
                Please Authenticate Yourself
              </h5>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="userEmail">Email address</label>
                <input type="email" class="form-control" id="userEmail" />
              </div>
              <div class="form-group">
                <label for="userPassword">Password</label>
                <input type="password" class="form-control" id="userPassword" />
              </div>
            </div>
            <div class="modal-footer">
              <button onClick={closeModal}>close</button>
              <button
                type="button"
                class="btn btn-info"
                onclick="authSubmitHandler()"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AuthModal;
