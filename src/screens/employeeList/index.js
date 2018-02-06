import React, { Component } from 'react';
import { Container, Header, Content, Item, List, ListItem, Body, Text,
    Icon, Button, Title, Left, Right } from 'native-base';
import {TouchableOpacity, ListView, View} from "react-native";
import firebase from "firebase";
import styles from "./styles";

export default class EmployeeList extends Component {
    
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {
      itemDataSource: ds
    }
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  componentWillMount(){

    let userId=firebase.auth().currentUser.uid;
    let leadsRef = firebase.database().ref('berbers/'+userId+'/');

    leadsRef.on('value', (snapshot)=> {
    let childData=[];
        snapshot.forEach((childSnapshot)=> {
            childData.push({
            name: childSnapshot.val().name,
            phone: childSnapshot.val().phone,
            _key: childSnapshot.key
            });
        });

      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(childData)
      });
    });
  }

  pressRow(item){
    
   let userId=firebase.auth().currentUser.uid;
   let Ref = firebase.database().ref('berbers/'+ userId + '/'); 
   Ref.child(item._key).remove();
  }

  renderRow(item){
    return(
        <ListItem >
            <Body>
             <TouchableOpacity style={{flexDirection: 'column'}}>
               <Text >{item.name}</Text>
               <Text note>{item.phone}</Text>                
             </TouchableOpacity>
            </Body>
            <Right>
                <Icon style={styles.Icon} active name="trash" 
                onPress={() => { this.pressRow(item); }}/>
            </Right>
         </ListItem>
    );
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button  transparent
              onPress={() => this.props.navigation.navigate("ProfilBerber")}>
              <Icon name="ios-swap" />
            </Button>
          </Left>
          <Body>
            <Title>Çalışanlar</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List style={styles.imageContainer}>
            <ListView
              dataSource={this.state.itemDataSource}
              renderRow={this.renderRow} 
            />
          </List>
          
        </Content>
          <Button block style={styles.button} onPress={() => navigate('Employee')}>
              <Text>Çalışan Ekle</Text>
          </Button>
      </Container>
    );
  }
}
    
