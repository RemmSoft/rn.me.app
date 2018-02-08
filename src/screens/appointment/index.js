import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, 
  Body, Left, Title, Button, Icon, Right } from 'native-base';
import {TouchableOpacity, Image, ListView, View} from "react-native";
import firebase from "firebase";
import DatePicker from 'react-native-datepicker';
import styles from "./styles";

const cover=require("../../assets/barber.png");
 
export default class Appointment extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
    this.state = {      
      itemDataSource: ds  
    }
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount(){
    const {data} = this.props.navigation.state.params;
    let leadsRef = firebase.database().ref('berbers/'+(data.key)+'/');
      leadsRef.on('value', (snapshot)=> {
        let childData=[];
            snapshot.forEach((childSnapshot)=> {
              if(childSnapshot.key!=="reservationId"){
                  childData.push({
                  name: childSnapshot.val().name,
                  phone: childSnapshot.val().phone,
                  key: childSnapshot.key,
                  owner: data.owner,
                  ownerPhone: data.ownerPhone,
                  });
              }
            });
          this.setState({
            itemDataSource: this.state.itemDataSource.cloneWithRows(childData)
          });
      }); 
  }

  renderRow(item){
     const {data} = this.props.navigation.state.params;
      return(
          <ListItem>
           <Thumbnail size={70} source={cover} />
             <Body>
              <TouchableOpacity style={{flexDirection: 'column'}} 
                 onPress={() => this.props.navigation.navigate("DateTime",{data: item,ownerId: data.key})}>
                <Text style={styles.liText}>{item.name}</Text>
                <Text style={styles.liText}>{item.phone}</Text>
               </TouchableOpacity>
             </Body>
          </ListItem>
      );
  }
  
  render() {
    const {data} = this.props.navigation.state.params;
    return (
      <Container>
        <Header>
          <Left>
            <Button  transparent
              onPress={() => this.props.navigation.navigate("HairStylePage")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{data.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List style={styles.imageContainer}>
          <ListItem>
            <Thumbnail size={70} source={cover} />
              <Body>
               <TouchableOpacity style={{flexDirection: 'column'}} 
                  onPress={() => this.props.navigation.navigate("DateTime",{data: data,ownerId:data.key})}>
                 <Text style={styles.liText}>{data.owner}</Text>
                 <Text style={styles.liText}>{data.ownerPhone}</Text>
                </TouchableOpacity>
              </Body>
           </ListItem> 
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
