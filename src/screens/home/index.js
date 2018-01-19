import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Button,
  H3,
  Text,
  Header,
  Title,
  Content,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form
} from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../assets/logo-kitchen-sink.png");

class Home extends Component {
  render() {
    return (  
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>

          </View>
          <View style={{ marginBottom: 80 }}>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input secureTextEntry />
              </Item>
            </Form>
            <Button block style={{ margin: 15, marginTop: 50 }}>
              <Text>Sign In</Text>
            </Button>
          </Content>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Text>Lets Go!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
