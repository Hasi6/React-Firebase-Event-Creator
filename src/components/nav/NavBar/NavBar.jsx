import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import {connect} from 'react-redux';
// Created Components
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../../actions/modals/modalActions";
import { signOut } from "../../../actions/auth/authActions";

const NavBar = ({ history, openModal, auth, signOut }) => {

  const authenticated = auth.authenticated

  const handleSignIn = () => {
    openModal('Login Modal')
  };

  const handleRegister = () => {
    openModal('Register Modal')
  };

  const handleSignOut = () => {
    signOut()
    return history.push("/");
  };

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="assets/images/logo.png" alt="logo" />
          Event Creator
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/test" name="Test" />
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
        <Menu.Item as={NavLink} exact to="/people" name="People" />
        <Menu.Item>
          <Button
            as={NavLink}
            exact
            to="/createEvent"
            floated="right"
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut}  currentUser={auth.currentUser}/>
        ) : (
          <SignedOutMenu signIn={handleSignIn} register={handleRegister} />
        )}
      </Container>
    </Menu>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps,{openModal, signOut})(NavBar));
