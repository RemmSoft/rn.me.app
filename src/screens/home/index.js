import React, { Component } from 'react';
import { ImageBackground, View, StatusBar, KeyboardAvoidingView } from "react-native";
import {
    Container,Button,H3,Text,Header,Title,Content,Item,Tab,Tabs,
    TabHeading,Label,Input,Body,Left,Right,Icon,Form,Card,CardItem
  } from "native-base";
import firebase from 'firebase';

import styles from "./styles";

const launchscreenBg = require("../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../assets/logo-kitchen-sink.png");
// tab bar altındaki indicator rengini verdiğimiz alan
const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: '#6FAF98' }
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', error: '', loading: false };
    }
    
    onSignIn() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.props.navigation.navigate("Profile"); 
            })
            .catch(() => {
               
            });
    }
    onSignUp() {
      this.setState({ error: '', loading: true });

      const { email, password} = this.state;
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => { 
            console.log("basarılı");
          })
          .catch(() => {
            console.log("basarısız");
          });
      this.props.navigation.navigate("Profile");
  }

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
                    <Item floatingLabel >
                      <Label>Email</Label>
                      <Input style={styles.colorWhite} value={this.state.email}
                    onChangeText={email => this.setState({ email })}/>
                    </Item>
                    <Item floatingLabel >
                      <Label>Password</Label>
                      <Input secureTextEntry={true} style={styles.colorWhite}value={this.state.password}
                    onChangeText={password => this.setState({ password })}/>
                    </Item>
                    </Form>
                  <Button block style={styles.button}onPress={this.onSignIn.bind(this)}>
                    <Text>Giriş Yap</Text>
                  </Button>
                  <Text style={styles.errorTextStyle}>{this.state.error}</Text>
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
                    
                    <Item floatingLabel >
                    <Label>Email</Label>
                    <Input style={styles.colorWhite} value={this.state.email}
                  onChangeText={email => this.setState({ email })}/>
                  </Item> 
                  <Item floatingLabel >
                  <Label>Password</Label>
                  <Input secureTextEntry={true} style={styles.colorWhite} value={this.state.password}
                onChangeText={password => this.setState({ password })}/>
                </Item>                                  
                    </Form>
                    <Button block style={styles.button}onPress={this.onSignUp.bind(this)}>
                      <Text>Kaydol</Text>
                    </Button>
                  </Content>
                </Tab>
              </Tabs>
          </ImageBackground>
          </Container>
        );
    }
};

export default Home;