import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import {
  Container,
  ProfileContainer,
  Title,
  SubTitle,
  TextContent,
  LogoutButton,
  LogoutButtonText
} from "./styles";
import { logout } from "../../services/auth";
import api from "../../services/api";

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      member: null,
      loading: true
    };
  }

  componentWillMount = async () => {
    const member = await api.get("/member");
    this.setState({ member: member.data, loading: false });
  };

  handleLogout = async () => {
    await logout();
    this.props.navigation.navigate("SignedOut");
  };

  dateFormat = date => {
    let data = new Date(date);
    let year = data.getFullYear();
    let month = (data.getMonth() + 1).toString();
    let monthFormated = month.length === 1 ? `0${month}` : month;
    let day = data.getDate().toString();
    let dayFormated = day.length === 1 ? `0${day}` : day;
    return `${dayFormated}/${monthFormated}/${year}`;
  };

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <ActivityIndicator size={80} color="#fc6963" />
        </Container>
      );
    } else {
      const { name, birthdate, email, article, comment } = this.state.member;
      return (
        <Container>
          <ProfileContainer>
            <Title>Meu Perfil</Title>
            <SubTitle>
              Nome: <TextContent>{name}</TextContent>
            </SubTitle>
            <SubTitle>
              Aniversário:{" "}
              <TextContent>{this.dateFormat(birthdate)}</TextContent>
            </SubTitle>
            <SubTitle>
              Email: <TextContent>{email}</TextContent>
            </SubTitle>
            <SubTitle>
              Artigos: <TextContent>{article.length}</TextContent>
            </SubTitle>
            <SubTitle>
              Comentários: <TextContent>{comment.length}</TextContent>
            </SubTitle>
            <LogoutButton activeOpacity={0.5} onPress={this.handleLogout}>
              <LogoutButtonText>Logout</LogoutButtonText>
            </LogoutButton>
          </ProfileContainer>
        </Container>
      );
    }
  }
}

export default MyProfile;
