import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, ListItem,Body, CheckBox, Input, Label,Text,Button, View,Title,Left,Right } from 'native-base';
import firebase from "firebase";



import styles from "./styles";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', name: '' };
    this.usersRef=this.getRef();
  }
componentDidUpdate(){
  this.getUser(this.usersRef);
} 
getRef(){
  var userId=firebase.auth().currentUser.uid;
  return firebase.database().ref("/users/"+userId);
}
getUser(usersRef){

  usersRef.once('value')
  .then(function (snap) {

    this.setState({
      email : snap.val().email,
      name : snap.val().name
    });
    
  });
  console.log(this.state);
}
onSave() {
  const { name, email } = this.state;
  var userId=firebase.auth().currentUser.uid;

  firebase.database().ref('users/' + userId).set({
    name: name,
    email:email
  });
  console.log(name);
  console.log(email);
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