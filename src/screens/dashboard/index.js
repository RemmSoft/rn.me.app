import React, { Component } from "react";
import {TouchableOpacity,Image,StatusBar} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  View
} from "native-base";

import styles from "./styles";

const logo = require("../../assets/splashscreen.png");
const cover = require("../../assets/web-cover1.jpg");
const kapak=require("../../assets/cover.png");

class Dashboard extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Bana Özel</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={{ flex: 1,flexDirection: 'row' }}>
            <TouchableOpacity style={{flexDirection: 'column',justifyContent :'center'}} onPress={() => this.props.navigation.navigate("HairStyles")}>
              <Image style={styles.stretch} source={kapak}/>
              <Text style={styles.textStyles}>Makas Ellerim</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
