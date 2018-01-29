import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, ListItem,Body, CheckBox, Input, Label,Text,Button, View,Title,Left,Right } from 'native-base';
import firebase from "firebase";

import styles from "./styles";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: ''
    }

    this.getUser(this.getRef());
  }

  getRef(){
    let userId=firebase.auth().currentUser.uid;
    return firebase.database().ref("/users/"+userId);
  }
  
  getUser(userRef){
    userRef.once('value').then((snap) => {
      this.setState({
        name: snap.val().name,
        email: snap.val().email,
        phone: snap.val().phone
      })
    });
  }

onSave() {
   const { userType, name, email, phone } = this.state;
   userId=firebase.auth().currentUser.uid;
   mail=firebase.auth().currentUser.email;

   firebase.database().ref('users/' + userId).set({
     userType: 0,
     name: name,
     email: mail,
     phone: phone
   });
 }
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
              <Input value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                    />
            </Item>
            <Item floatingLabel >
              <Label>Email</Label>
              <Input value={this.state.email}
                    onChangeText={(email) => this.setState({ email })} 
                    />
            </Item>
            <Item floatingLabel >
              <Label>Telefon Numaranız</Label>
              <Input value={this.state.phone}
                    onChangeText={(phone) => this.setState({ phone })} 
                    />
            </Item>
            <Button block style={styles.button} onPress={this.onSave.bind(this)}>
                 <Text>Kaydet</Text>
            </Button>  
          </Form>
        </Content>
      </Container>
    );
  }
}