import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, ListItem,Body, CheckBox, Input, Label,Text,Button, View,Title,Left,Right } from 'native-base';
import firebase from "firebase";

import styles from "./styles";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
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
        email: snap.val().email
      })
    });
  }

  onSave() {
    const { name, email } = this.state;
    userId=firebase.auth().currentUser.uid;

    firebase.database().ref('users/' + userId).set({
      name: name,
      email:email
    });
    console.log(name);
    console.log(email);
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
            <ListItem>
                <Button rounded danger
                onPress={this.onSave.bind(this)}>
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