import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, ListItem,Body, CheckBox, Input, Label,Text,Button, View,Title,Left,Right } from 'native-base';
import firebase from "firebase";

import styles from "./styles";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', phone: ''}
    
  }

  onSaveEmployee() {
    const { name, phone} = this.state;

    let userId=firebase.auth().currentUser.uid;
    
    firebase.database().ref('berbers/' + userId + '/' ).push({
        name: name,
        phone: phone
    });
        
    this.props.navigation.navigate('ProfilBerber');
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
            <Item floatingLabel>
              <Label>Adı ve Soyadı</Label>
              <Input value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                    />
            </Item>
            <Item floatingLabel >
              <Label>Telefon Numarası</Label>
              <Input value={this.state.phone}
                    onChangeText={(phone) => this.setState({ phone })} 
                    />
            </Item>
            <Button block style={styles.button} onPress={this.onSaveEmployee.bind(this)}>
                 <Text>Kaydet</Text>
            </Button>  
          </Form>
        </Content>
      </Container>
    );
  }
}