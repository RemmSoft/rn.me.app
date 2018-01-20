import React, { Component } from "react";
import { ImageBackground, View, StatusBar, KeyboardAvoidingView } from "react-native";
import {
  Container,Button,H3,Text,Header,Title,Content,Item,Tab,Tabs,
  TabHeading,Label,Input,Body,Left,Right,Icon,Form,Card,CardItem
} from "native-base";


import styles from "./styles";

const launchscreenBg = require("../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../assets/logo-kitchen-sink.png");
// tab bar altındaki indicator rengini verdiğimiz alan
const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: '#6FAF98' }
};

class Home extends Component {
  render() {
    return (
        <Container>
          <StatusBar barStyle="light-content" />
          <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
            <View style={styles.logoContainer}>

            </View>
            <Tabs style={{ elevation: 2}} {...tabProps}>
              <Tab
                heading={
                  <TabHeading>
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
                    <Item floatingLabel>
                      <Label>Password</Label>
                      <Input secureTextEntry={true} style={styles.colorWhite}/>
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
                      <Input style={styles.colorWhite}/>
                    </Item>
                    <Item floatingLabel>
                      <Label>Email</Label>
                      <Input style={styles.colorWhite}/>
                    </Item>
                    <Item floatingLabel>
                      <Label>Password</Label>
                      <Input secureTextEntry style={styles.colorWhite}/>
                    </Item>
                    <Item floatingLabel>
                      <Label>Phone</Label>
                      <Input style={styles.colorWhite}/>
                    </Item>
                    <Item floatingLabel>
                      <Label>UserType</Label>
                      <Input style={styles.colorWhite}/>
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
