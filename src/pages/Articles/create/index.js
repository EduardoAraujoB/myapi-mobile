import React, { Component } from "react";

import TabBar from "../../../components/TabBar";
import api from "../../../services/api";
import {
  Container,
  FormContainer,
  Title,
  ErrorContainer,
  ErrorMessage,
  Label,
  Input,
  FormButton,
  ButtonText
} from "./styles";

class ArticleCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      error: ""
    };
  }

  handleSubmit = async () => {
    const { title, content } = this.state;
    if (!title || !content) {
      this.setState({ error: "Preencha todos os campos" });
    } else {
      const send = { title, content };
      try {
        await api.post("/articles", send);
        this.props.navigation.navigate("SignedIn");
      } catch (error) {
        console.log(error);
        this.setState({ error: "Erro ao cadastrar" });
      }
    }
  };

  render() {
    return (
      <>
        <TabBar navigation={this.props.navigation} title="Cadastrar Artigo" />
        <Container
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FormContainer>
            <Title>Cadastrar Artigo</Title>
            {!!this.state.error && (
              <ErrorContainer>
                <ErrorMessage>{this.state.error}</ErrorMessage>
              </ErrorContainer>
            )}
            <Label>Título</Label>
            <Input onChangeText={title => this.setState({ title })} />
            <Label>Conteúdo</Label>
            <Input onChangeText={content => this.setState({ content })} />
            <FormButton activeOpacity={0.8} onPress={this.handleSubmit}>
              <ButtonText>Cadastrar</ButtonText>
            </FormButton>
          </FormContainer>
        </Container>
      </>
    );
  }
}

export default ArticleCreate;
