import React, { Component } from 'react';
import { Container, Header, Content, Text, Body,Badge,Left,Title,Button,Icon,Right } from 'native-base';
import {TouchableOpacity,Image, ListView,View} from "react-native";
import firebase from "firebase";
import DatePicker from 'react-native-datepicker'


import styles from "./styles";

const cover=require("../../assets/barber.png");
const rows = [
  { id: 1, text: "10:00" },
  { id: 2, text: "10:30" },
  { id: 3, text: "11:00" },
  { id: 4, text: "11:30" },
  { id: 5, text: "12:00" },
  { id: 6, text: "12:30" }
];
export default class DateTime extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {      
      date: '',
      time: '20:00',
      datetime: '06/05/2018 20:00',
      selectTime:''
    }
  }
  Time() {
    return rows.map((news, i)=>{
      return(
        <View key={i} style={{margin:25,}}>
            <Button rounded success style={{paddingLeft:30,paddingRight:30,width:140}} onPress={this.setState({selectTime: news.text})}>
              <Text >{news.text}</Text>
            </Button>          
       </View>
      );
    });
  }
  pressRow(item){
      console.log(item);
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
          <View style={styles.icon}>
           <DatePicker
            style={{width: 300}}
            date={this.state.datetime}
            mode="date"
            placeholder="placeholder"
            format="DD/MM/YYYY"
            minDate="2018-05-01"
            maxDate="2020-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({datetime: date});}}
          />
        </View>
        <View style={styles.icon}>
         <DatePicker
            style={{width: 300}}
            date={this.state.time}
            mode="time"
            format="HH:mm"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            minuteInterval={10}
            onDateChange={(time) => {this.setState({time: time});}}
            />
          </View>
          <View style={{flexDirection:'column'}}>
            {this.Time()}
          </View>
        </Content>
        <Button block style={styles.btnWorker} onPress={() => navigate('Employee')}>
            <Text>Randevu Ekle</Text>
        </Button>
      </Container>
    );
  }
}
