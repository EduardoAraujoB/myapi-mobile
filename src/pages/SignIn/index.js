import React, { Component } from "react";

import {
  Container,
  FormContainer,
  Title,
  Label,
  Input,
  FormButton,
  ButtonText,
  ErrorContainer,
  ErrorMessage
} from "./styles";
import api from "../../services/api";
import { login } from "../../services/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }

  handleSubmit = async () => {
    if (!this.state.email || !this.state.password) {
      this.setState({ error: "Preencha todos os campos" });
    } else {
      const { email, password } = this.state;
      const send = { email, password };
      try {
        const response = await api.post("/members/authenticate", send);
        login(response.data.token);
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "Erro ao logar, email ou senha incorretos!" });
      }
    }
  };

  render() {
    return (
      <Container>
        <FormContainer>
          <Title>Login</Title>
          {!!this.state.error && (
            <ErrorContainer>
              <ErrorMessage>{this.state.error}</ErrorMessage>
            </ErrorContainer>
          )}
          <Label>Email</Label>
          <Input
            textContentType="emailAddress"
            autoCapitalize="none"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            value={this.state.password}
            textContentType="password"
            onChangeText={password => this.setState({ password })}
          />
          <FormButton activeOpacity={0.5} onPress={this.handleSubmit}>
            <ButtonText>Enviar</ButtonText>
          </FormButton>
        </FormContainer>
      </Container>
    );
  }
}

export default SignIn;
