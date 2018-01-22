import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body,Badge } from 'native-base';

import styles from "./styles";

const cover=require("../../assets/barber.png");
 
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List style={styles.imageContainer}>
            <ListItem>
              <Thumbnail size={70} source={cover} />
              <Body>
                <Text>Ekol Berber</Text>
                <Text note>Saç, sakal, ağda</Text>
              </Body>
              <Badge info>
                  <Text>2</Text>
              </Badge>
            </ListItem>
            <ListItem>
              <Thumbnail size={70} source={cover} />
              <Body>
                <Text>Barber Güzellik Salonu</Text>
                <Text note>Saç, sakal, ağda</Text>
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
