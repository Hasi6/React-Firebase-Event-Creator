import React, { Fragment } from "react";
import { connect } from "react-redux";

// created Components
import TestModal from "./TestModal";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const ModalManager = ({ currentModal }) => {
  const renderModals = () => {
    if (currentModal) {
      switch (currentModal.modalType) {
        case "Test Modal":
          return <TestModal />;
        case "Login Modal":
          return <LoginModal />;
        case "Register Modal":
          return <RegisterModal />;
        default:
          return null;
      }
    }
    return null;
  };

  return <Fragment>{renderModals()}</Fragment>;
};

const mapStateToProps = state => ({
  currentModal: state.modals
});

export default connect(mapStateToProps)(ModalManager);
