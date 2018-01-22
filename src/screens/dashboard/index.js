import React, { Component } from "react";
import {TouchableOpacity,Image} from "react-native";
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
class NHThumbnail extends Component {
  render() {
    return (
      <Container style={styles.container}>
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
            <Title>Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={{ flex: 1, alignItems: "center",flexDirection: 'row' }}>
            <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => this.props.navigation.navigate("Home")}>
              <Image style={styles.stretch} source={kapak} />
              <Text style={styles.textStyles}>Bana Özel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => this.props.navigation.navigate("HairStyles")}>
              <Image style={styles.stretch} source={kapak}/>
              <Text style={styles.textStyles}>Yakınımda</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default NHThumbnail;
