import React, { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";

// Created Components
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

const NavBar = ({ history }) => {
  const [authenticate, setAuthenticate] = useState(false);

  const handleSignIn = () => {
    setAuthenticate(true);
  };

  const handleSignOut = () => {
    setAuthenticate(false);
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
        {authenticate ? (
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu signIn={handleSignIn} />
        )}
      </Container>
    </Menu>
  );
};

export default withRouter(NavBar);
