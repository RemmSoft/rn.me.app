import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, ListItem,Body, CheckBox, Input, 
         Label,Text,Button, View,Title,Left,Right,Tab,Tabs,TabHeading } from 'native-base';
import firebase from "firebase";

import styles from "./styles";

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: '#ef5350' }
};

export default class Calisan extends Component {
  constructor(props) {
    super(props);
    this.state = {userType:'', name: '', phone: '', email:'', workPlace:'', workAddress:'', workPhone:'', 
    latitude:'', longtitude:'', createdAt:'', updateAt:'', status:'', ownerId:'', error: ''};
  }

  onSaveBarber() {
    const { userType, name, phone, email, workPlace, workAddress, workPhone,
      latitude, longtitude, createdAt, updateAt, status, ownerId} = this.state;

    userId=firebase.auth().currentUser.uid; 
    mail=firebase.auth().currentUser.email;
    firebase.database().ref('berbers/' + userId).set({
      userType: 1,
      name: name,
      phone: phone,
      email: mail
    });

    this.props.navigation.navigate("ProfilBerber");
  }
  
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
             <Title>Çalışan Bilgileri</Title>
           </Body>
        </Header>
        <Content>
            <Form>
              <Item floatingLabel >
                <Label>Ad Soyad</Label>
                <Input value={this.state.name}
                onChangeText={name => this.setState({ name })}/>
              </Item>
              <Item floatingLabel >
                <Label>Telefon</Label>
                <Input value={this.state.phone}
                onChangeText={phone => this.setState({ phone })}/>
              </Item>
            </Form>
          <Button block style={styles.button} onPress={this.onSaveBarber.bind(this)}>
          <Text>Kaydet</Text>
          </Button>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
       </Content>
      </Container>
    );
  }
}