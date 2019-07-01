import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

import Routes from "./routes";
import { Container } from "./pages/Home/styles";
import { isAutenticated } from "./services/auth";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  }
  loading = false;

  componentWillMount = async () => {
    this.loading = true;
    const response = await isAutenticated();
    console.log(response);
    this.loading = false;
    this.setState({ isLogged: response });
  };

  render() {
    if (this.loading) {
      return (
        <Container>
          <ActivityIndicator size={80} color="#fc6963" />
        </Container>
      );
    } else {
      return <Routes />;
    }
  }
}

export default App;
