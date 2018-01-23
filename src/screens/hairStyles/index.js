import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body,Badge,Left,Title,Button,Icon,Right } from 'native-base';
import {TouchableOpacity,Image} from "react-native";


import styles from "./styles";

const cover=require("../../assets/barber.png");
 
export default class HairStyles extends Component {
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
            <Title>Ata MEN’S</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List style={styles.imageContainer}>
            <ListItem>
              <Thumbnail size={70} source={cover} />
              <Body>
               <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => this.props.navigation.navigate("HairStylePage")}>
               <Text>Ekol Güzellik Salonu</Text>
               <Text note>Saç, sakal, ağda</Text>
               </TouchableOpacity>
              </Body>
              <Badge info>
                  <Text>2</Text>
              </Badge>
            </ListItem>
            <ListItem>
              <Thumbnail size={70} source={cover} />
              <Body>
                <TouchableOpacity style={{flexDirection: 'column'}} onPress={() => this.props.navigation.navigate("HairStylePage")}>
                  <Text>Barber Güzellik Salonu</Text>
                  <Text note>Saç, sakal, ağda</Text>
                </TouchableOpacity>
             </Body>
              <Badge info>
                  <Text>5</Text>
              </Badge>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
