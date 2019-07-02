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
    if (!this.state.email || this.state.password) {
      this.setState({ error: "Preencha todos os campos" });
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
