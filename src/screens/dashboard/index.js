import React, { Component } from "react";
import {TouchableOpacity, Image, StatusBar} from "react-native";
import { Container, Header, Title, Content, Button, Icon, 
  Text, Body, Left, Right, View } from "native-base";
import firebase from "firebase";
import styles from "./styles";

const logo = require("../../assets/splashscreen.png");
const cover = require("../../assets/web-cover1.jpg");
const kapak=require("../../assets/cover.png");

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={userType:0};
    
  }

  getRef(){
    let userId=firebase.auth().currentUser.uid;
    return firebase.database().ref("/users/"+userId);
  }
  
  getUser(userRef){
    userRef.once('value').then((snap) => {
      this.setState({
        userType:snap.val().userType          
      })
      if(this.state.userType==0){
        this.props.navigation.navigate('Profile');
      }
      else if(this.state.userType==1)
      {
        this.props.navigation.navigate('ProfilBerber');
      }
    });
 
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigate.navigate('Drawer')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Bana Özel</Title>
          </Body>
          <Right>
          <Button
              transparent
              onPress={() =>this.getUser(this.getRef())}
            >
              <Icon name="home" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <View style={styles.content}>
            <View style={styles.icon}>
              <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate("HairStyles")}>
                <Image style={styles.stretch} source={kapak}/>
                <Text style={styles.textStyle}>Makas Ellerim</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate("HairStyles")}>
                <Image style={styles.stretch} source={kapak}/>
                <Text style={styles.textStyle}>Berberler</Text>
              </TouchableOpacity>
             </View> 
          </View>
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
