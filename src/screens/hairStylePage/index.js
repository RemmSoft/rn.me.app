import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,Title } from 'native-base';

const kapak=require("../../assets/cover.png");

export default class HairStylePage extends Component {
  render() {
    return (
      <Container>
          <Header>
          <Left>
            <Button  transparent
              onPress={() => this.props.navigation.navigate("HairStyles")}>
              <Icon name="ios-swap" />
            </Button>
          </Left>
          <Body>
            <Title>Ata MEN’S</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={kapak} />
                <Body>
                  <Text>Ata Men's Club</Text>
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
               <Button small rounded success>
                 <Text>Randevu Al</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Biz Kimiz?
Profesyonel ekibi ile Acıbadem de hizmet veren Ata men’s Club, saçı sanata dönüştüren modelleriyle, kendine güvenen ve bakımlı olmayı seven herkesin vazgeçilmez adresidir.

Yüz ve vücut yapınızın, yaşam tarzınız ve kişiliğiniz ile bütünlüğünden ortaya çıkan size özel saç modeliniz; günlük ama iddialı, naturel ama bakımlı ve her an her kıyafetinize uyum sağlayan bir tarzda keyfinize keyif katacaktır.

Yapılan araştırmalara göre Saç modeli kişilerin yaşam tarzını yansıtıyor.Yaşam tarzına uygun saç modeli de kişilerin kendilerini daha mutlu hissetmelerini sağlıyor

Bizim işimiz sizin yaşam tarzınıza en uygun saç modelini sizin için belirlemek ve bir hayat boyu sizin mutlu olmanızı sağlamak. Yüz hatlarınıza uygun saç modelini belirledikten sonra geriye sadece tek bir şey kalıyor

Oda saçlarınızı Türkiye’nin en iyi saç tasarımcısı ATA MEN’S CLUB’e emanet etmek
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
