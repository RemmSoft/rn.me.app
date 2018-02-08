import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Body, Input, Label, 
  Text, Button, Title, Left, Tab, Tabs, TabHeading } from 'native-base';
import firebase from "firebase";
import styles from "./styles";

const tabProps = {
  tabBarUnderlineStyle: { backgroundColor: '#6FAF98' }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {userType:'', name: '', phone: '', email:'', workPlace:'', workAddress:'', workPhone:'', 
    latitude:'', longtitude:'', createdAt:'', updateAt:'', status:'', error: ''};
  }

  onSaveUser() {
    const { userType, name, phone, email} = this.state;
    userId=firebase.auth().currentUser.uid;
    mail=firebase.auth().currentUser.email;
    firebase.database().ref('users/' + userId).set({
      userType: 0,
      name: name,
      phone: phone,
      email: mail
    });

    this.props.navigation.navigate("Dashboard");
  }

  onSaveBarber() {
    const { userType, name, phone, email, workPlace, workAddress, workPhone,
      latitude, longtitude, createdAt, updateAt, status} = this.state;

    userId=firebase.auth().currentUser.uid; 
    mail=firebase.auth().currentUser.email;
    firebase.database().ref('users/' + userId).set({
      userType: 1,
      name: name,
      phone: phone,
      email: mail
    });

    firebase.database().ref('berbers/' + userId + "/reservationId").set({    
      name: name,
      phone: phone,
    });

    firebase.database().ref('stores/' + userId).set({
      workPlace: workPlace,
      workAddress: workAddress,
      workPhone: workPhone,
      latitude: "",
      longtitude: "",
      createdAt: Date.now(),
      updateAt: Date.now(),
      status: 1,
      owner:this.state.name,
      ownerPhone:this.state.phone
    });

    this.props.navigation.navigate("Dashboard");
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
        
        <Tabs style={{ elevation: 2}} {...tabProps}>
                <Tab
                  heading={
                    <TabHeading>
                      <Text style={styles.tabText}>Müşteri</Text>
                    </TabHeading>
                  }
                >
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
                    <Button block style={styles.button} onPress={this.onSaveUser.bind(this)}
                    >
                    <Text>Müşteri Kaydı</Text>
                  </Button>
                  <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                  </Content>
                </Tab>
                <Tab
                  heading={
                    <TabHeading>
                      <Text style={styles.tabText}>Berber</Text>
                    </TabHeading>
                  }
                >
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
                    <Button block style={styles.button} onPress={this.onSaveBarber.bind(this)}
                    >
                      <Text>Berber Kaydı</Text>
                    </Button>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                  </Content>
                </Tab>
              </Tabs>
      </Container>
    );
  }
}