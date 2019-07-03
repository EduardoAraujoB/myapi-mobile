import React, { Component } from "react";

import {
  Container,
  ProfileContainer,
  LogoutButton,
  LogoutButtonText
} from "./styles";
import { logout } from "../../services/auth";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  handleLogout = async () => {
    await logout();
  };

  render() {
    return (
      <Container>
        <ProfileContainer>
          <LogoutButton activeOpacity={0.5} onPress={this.handleLogout}>
            <LogoutButtonText>Logout</LogoutButtonText>
          </LogoutButton>
        </ProfileContainer>
      </Container>
    );
  }
}

export default MyProfile;
