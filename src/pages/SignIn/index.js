import React from "react";

import {
  Container,
  FormContainer,
  Title,
  Label,
  Input,
  FormButton,
  ButtonText
} from "./styles";

const SignIn = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <Label>Email</Label>
        <Input textContentType="emailAddress" />
        <Label>Password</Label>
        <Input secureTextEntry={true} textContentType="password" />
        <FormButton activeOpacity={0.5}>
          <ButtonText>Enviar</ButtonText>
        </FormButton>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
