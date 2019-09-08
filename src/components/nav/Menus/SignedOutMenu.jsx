import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { openModal } from "../../../actions/modals/modalActions";
import {connect} from 'react-redux'

const SignedOutMenu = ({signIn, openModal}) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Login" onClick={()=>openModal('Login Modal')}/>
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
        onClick={()=>openModal('Register Modal')}
      />
    </Menu.Item>
  );
};

export default connect(null, {openModal})(SignedOutMenu);
