import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body,Badge,Left,Title,Button,Icon,Right } from 'native-base';
import {TouchableOpacity,Image, ListView,View} from "react-native";
import firebase from "firebase";
import DatePicker from 'react-native-datepicker'


import styles from "./styles";

const cover=require("../../assets/barber.png");
 
export default class DateTime extends Component {
  constructor(props){
    super(props);
    this.state = {      
      date: '',
      time: '20:00',
      datetime: '2016-05-05 20:00',
      datetime1: '2016-05-05 20:00',    
    }
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
            format="YYYY-MM-DD"
            minDate="2018-05-01"
            maxDate="2020-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date});}}
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
        </Content>
        <Button block style={styles.btnWorker} onPress={() => navigate('Employee')}>
                    <Text>Randevu Ekle</Text>
        </Button>
      </Container>
    );
  }
}
