import React from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import LoginForm from "../auth/login/LoginForm";
import { closeModal } from "../../../actions/modals/modalActions";

const actions = { closeModal };

const LoginModal = ({ closeModal }) => {
  return (
    <Modal closeIcon="close" size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Login to Event Creator</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <LoginForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default connect(
  null,
  actions
)(LoginModal);
