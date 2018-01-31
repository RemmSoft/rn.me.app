import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body,Badge,Left,Title,Button,Icon,Right } from 'native-base';
import {TouchableOpacity,Image, ListView,View} from "react-native";
import firebase from "firebase";
import DatePicker from 'react-native-datepicker'


import styles from "./styles";

const cover=require("../../assets/barber.png");
 
export default class Appointment extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {      
      itemDataSource: ds,
      date: '',
      time: '20:00',
      datetime: '2016-05-05 20:00',
      datetime1: '2016-05-05 20:00',    
    }
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount(){
    let leadsRef = firebase.database().ref('berbers/');
    leadsRef.on('value', (snapshot)=> {
    let childData=[];
    snapshot.forEach((childSnapshot)=> {
        childData.push({
         title: childSnapshot.val().workPlace,
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
               <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => this.props.navigation.navigate("DateTime")}>
                 <Text style={styles.liText}>{item.title}</Text>
                </TouchableOpacity>
              </Body>
           </ListItem>
      );
    }
  
  render() {
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
            <Title>Randevu Oluştur</Title>
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
