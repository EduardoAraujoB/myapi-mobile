import React, { Component } from "react";
import DatePicker from "react-native-datepicker";

import {
  Container,
  FormContainer,
  Title,
  Label,
  Input,
  FormButton,
  ButtonText,
  Hr,
  NewUserButton,
  NewUserButtonText,
  ErrorContainer,
  ErrorMessage
} from "./styles";
import api from "../../services/api";
import { login } from "../../services/auth";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birthdate: "",
      email: "",
      password: "",
      error: null
    };
  }

  handleSubmit = async () => {
    const { name, birthdate, email, password } = this.state;
    if (!name || !birthdate || !email || !password) {
      this.setState({ error: "Preencha todos os campos" });
    } else {
      const send = { name, birthdate, email, password };
      try {
        const response = await api.post("/member", send);
        login(response.data.token);
        this.props.navigation.navigate("SignedIn");
      } catch (err) {
        console.log(err, send);
        this.setState({ error: "Erro ao cadastrar" });
      }
    }
  };

  render() {
    return (
      <Container>
        <FormContainer>
          <Title>Cadastro</Title>
          {!!this.state.error && (
            <ErrorContainer>
              <ErrorMessage>{this.state.error}</ErrorMessage>
            </ErrorContainer>
          )}
          <Label>Name</Label>
          <Input
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <Label>Birthdate</Label>
          <DatePicker
            style={{
              width: "100%",
              height: "auto",
              marginTop: 5,
              marginBottom: 5
            }}
            mode="date"
            date={this.state.birthdate}
            placeholder="Select a date"
            format="DD-MM-YYYY"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateInput: {
                padding: 10,
                alignItems: "flex-start",
                borderColor: "#ddd",
                borderRadius: 10,
                height: 50
              },
              placeholderText: {
                color: "#888888",
                textAlign: "left"
              }
            }}
            onDateChange={birthdate => {
              this.setState({ birthdate });
            }}
          />
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
            <ButtonText>Cadastrar</ButtonText>
          </FormButton>
          <Hr />
          <NewUserButton
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <NewUserButtonText>Login</NewUserButtonText>
          </NewUserButton>
        </FormContainer>
      </Container>
    );
  }
}

export default SignUp;
