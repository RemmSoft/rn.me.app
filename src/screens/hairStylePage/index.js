import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, 
  Button, Icon, Left, Body, Right, Title } from 'native-base';
import firebase from "firebase";

const kapak=require("../../assets/cover.png");

export default class HairStylePage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
          <Header>
          <Left>
            <Button  transparent
              onPress={() => this.props.navigation.navigate("HairStyles")}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.navigation.state.params.category.title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={kapak} />
                <Body>
                  <Text></Text>
                  <Text note>Saç Bakım</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={kapak} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Right>
               <Button small rounded success onPress={() => navigate('Appointment',{data: this.props.navigation.state.params.category})}>
                 <Text>Randevu Al</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.props.navigation.state.params.category.phone}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
