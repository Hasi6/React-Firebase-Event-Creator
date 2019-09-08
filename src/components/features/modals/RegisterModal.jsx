import React from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";

import { closeModal } from "../../../actions/modals/modalActions";
import RegisterForm from "../auth/register/RegisterForm";

const actions = { closeModal };

const RegisterModal = ({ closeModal }) => {
  return (
    <Modal closeIcon="close" size="mini" open={true} onClose={closeModal}>
      <Modal.Header>Sign Up to Re-vents!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <RegisterForm />
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default connect(
  null,
  actions
)(RegisterModal);
