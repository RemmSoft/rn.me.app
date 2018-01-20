import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,Button,H3,Text,Header,Title,Content,Item,Tab,Tabs,
  TabHeading,Label,Input,Body,Left,Right,Icon,Form,Card,CardItem
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
          <Tabs style={{ elevation: 2 }}>
          <Tab
            heading={
              <TabHeading>
                <Icon name="camera" />
                <Text>Login</Text>
              </TabHeading>
            }
          >
          <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input style={styles.colorWhite}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry style={styles.colorWhite}/>
            </Item>
          </Form>
          <Button block style={styles.button}>
            <Text>Sign In</Text>
          </Button>
        </Content>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Register</Text>
              </TabHeading>
            }
          >
           <Content>
          <Form>
          <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>UserType</Label>
              <Input />
            </Item>
          </Form>
          <Button block style={styles.button}>
            <Text>Sign Up</Text>
          </Button>
        </Content>
          </Tab>
        </Tabs>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
