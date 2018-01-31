import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, ListItem,Body, CheckBox, Input, 
  Label,Text,Button, View,Title,Icon,Left,Right,Tab,Tabs,TabHeading } from 'native-base';
import firebase from "firebase";

import styles from "./styles";

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: '#ef5350' }
};


export default class ProfilBerber extends Component {
  constructor(props) {
    super(props);
    this.state = {userType:'', name: '', phone: '', workPlace:'', workAddress:'', workPhone:'', 
    latitude:'', longtitude:'', createdAt:'', updateAt:'', status:'', ownerId:'', error: ''};
    this.getUser();
  }

  getUser(){
    let userId=firebase.auth().currentUser.uid;
    let userRef=firebase.database().ref("/users/"+userId);
    let storeRef=firebase.database().ref("/stores/"+userId);
    userRef.once('value').then((snap) => {
      this.setState({
        name: snap.val().name,
        phone: snap.val().phone,      
      })
    });

    storeRef.once('value').then((snap) => {
        this.setState({
          workPlace: snap.val().workPlace,
          workAddress: snap.val().workAddress,
          workPhone: snap.val().workPhone            
        })
      });
  }

  onSaveEmployee() {
    const { userType, name, email, phone} = this.state;
    userId=firebase.auth().currentUser.uid;
    mail=firebase.auth().currentUser.email;

    firebase.database().ref('berbers/' + userId).set({
      userType: 1,
      name: name,
      email: mail,
      phone: phone
    });
  }

  onSaveBarber() {
    const { userType, name, email, phone, workPlace, workAddress, workPhone,
      latitude, longtitude, createdAt, updateAt, status} = this.state;

    userId=firebase.auth().currentUser.uid; 
    mail=firebase.auth().currentUser.email;

    firebase.database().ref('users/' + userId).set({
      userType: 1,
      name: name,
      email: mail,
      phone: phone
    });

    firebase.database().ref('stores/' + userId).set({
      workPlace: workPlace,
      workAddress: workAddress,
      workPhone: workPhone,
      latitude: "",
      longtitude: "",
      createdAt: Date.now(),
      updateAt: Date.now(),
      status: 1
    });
  }
  
  render() {
    const {navigate} = this.props.navigation;

    return (
        <Container>
            <Header>
              <Left>
                <Button  transparent
                  onPress={() => this.props.navigation.navigate("Dashboard")}>
                  <Icon name="ios-swap" />
                </Button>
              </Left>
                <Body>
                <Title>Kullanıcı Bilgileriniz</Title>
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
                    <Label>Cep Tel</Label>
                    <Input value={this.state.phone}
                    onChangeText={phone => this.setState({ phone })}/>
                </Item>
                <Item floatingLabel >
                    <Label>İş Yeri İsmi</Label>
                    <Input value={this.state.workPlace}
                    onChangeText={workPlace => this.setState({ workPlace })}/>
                </Item>  
                <Item floatingLabel >
                    <Label>İş Adresi</Label>
                    <Input value={this.state.workAddress}
                    onChangeText={workAddress => this.setState({ workAddress })}/>
                </Item>
                <Item floatingLabel >
                    <Label>İş Telefon</Label>
                    <Input value={this.state.workPhone}
                    onChangeText={workPhone => this.setState({ workPhone })}/>
                </Item>
                </Form>
                
            <Text style={styles.errorTextStyle}>{this.state.error}</Text>
            </Content>
                <Button block style={styles.button} onPress={() => navigate('EmployeeList')}>
                    <Text>Çalışanlar</Text>
                </Button>
                <Button block style={styles.button} onPress={this.onSaveBarber.bind(this)}>
                    <Text>Güncelle</Text>
                </Button>
    </Container>
    );
  }
}