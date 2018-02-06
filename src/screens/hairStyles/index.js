import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, 
  Text, Body, Left, Title, Button, Icon, Right } from 'native-base';
import {TouchableOpacity, Image, ListView, View} from "react-native";
import firebase from "firebase";
import styles from "./styles";

const cover=require("../../assets/barber.png");
 
export default class HairStyles extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {      
      itemDataSource: ds,    
    }
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount(){
    let leadsRef = firebase.database().ref('stores/');
    leadsRef.on('value', (snapshot)=> {
    let childData=[];
    snapshot.forEach((childSnapshot)=> {
        childData.push({
         title: childSnapshot.val().workPlace,
         key: childSnapshot.key,
         phone: childSnapshot.val().workPhone,
         owner: childSnapshot.val().owner,
         ownerPhone:childSnapshot.val().ownerPhone
        });
      });
      this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(childData)
      });
    });
  }

  renderRow(item){
      return(
          <ListItem>
            <Thumbnail size={70} source={cover} />
              <Body>
               <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => this.pressRow(item)}>
                 <Text style={styles.liText}>{item.title}</Text>
                 <Text note>Saç, sakal, ağda</Text>
                </TouchableOpacity>
              </Body>
           </ListItem>
      );
  }

  pressRow(item){
      return(
        this.props.navigation.navigate('HairStylePage',{category: item})
      )
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button  transparent
              onPress={() => this.props.navigation.navigate("Dashboard")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Berberler</Title>
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
      </Container>
    );
  }
}
