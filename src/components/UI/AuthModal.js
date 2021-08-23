import React from "react";
import Modal from "react-modal";

function AuthModal() {
  return (
    <div
      class="modal fade"
      id="authModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center" id="exampleModalLabel">
              Please Authenticate Yourself
            </h5>
          </div>
          <form>
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
              <button
                type="button"
                class="btn btn-info"
                onclick="authSubmitHandler()"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
