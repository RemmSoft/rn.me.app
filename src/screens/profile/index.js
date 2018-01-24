import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, ListItem,Body, CheckBox, Input, Label,Text,Button, View,Title,Left,Right } from 'native-base';
import firebase from "firebase";



import styles from "./styles";

export default class Profile extends Component {
/*componentWillMount(){
var userId=firebase.auth().currentUser;
//var database=firebase.database().ref('/users/'+userId).once('value');
if (userId != null) {
  userId.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + userId.uid);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
 }
}


/*firebase.database().ref('/users/'+userId).once('value').then(function(snapshot){
  var username=(snapshot.val()&&snapshot.val().username);});
 console.log(username,userId);
} */
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>Kullanıcı Bilgileri</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Adınız ve Soyadınız</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label>Telefon Numaranız</Label>
              <Input />
            </Item>
            <ListItem>
                <Button rounded danger
              onPress={() => this.props.navigation.navigate("Dashboard")}>
                   <Text>Müşteri Kaydı</Text>
                </Button>
            </ListItem>
            <ListItem>
                <Button iconRight rounded>
                     <Text>Berber Kaydı</Text>
                </Button>
            </ListItem>     
          </Form>
        </Content>
      </Container>
    );
  }
}