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
     }else{
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
          <View style={{ flex: 1,flexDirection: 'row',justifyContent :'center' }}>
            <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => this.props.navigation.navigate("HairStyles")}>
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
