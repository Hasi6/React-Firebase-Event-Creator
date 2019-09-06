import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="assets/images/logo.png" alt="logo" />
          Event Creator
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
        <Menu.Item as={NavLink} exact to="/people" name="People" />
        <Menu.Item>
          <Button as={NavLink} exact to="/createEvent" floated="right" positive inverted content="Create Event" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="Login" />
          <Button
            basic
            inverted
            content="Sign Out"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
