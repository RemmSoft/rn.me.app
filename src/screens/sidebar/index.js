import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content, Text, List, ListItem, Icon, Container, Left, Right, Badge
} from "native-base";
import firebase from "firebase";
import styles from "./style";

const drawerCover = require("../../../src/assets/drawer-cover.png");
const drawerImage = require("../../../src/assets/logo-kitchen-sink.png");

const datas = [
  {
    name: "Anasayfa",
    route: "Dashboard",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "Profil",
    route: "Profile",
    icon: "phone-portrait",
    bg: "#C5F442"
  },
  {
    name: "Çıkış",
    route: "Home",
    icon: "exit",
    bg: "#C5F442"
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      userType: 0,
      route:"Profile"
    };
  }

  componentWillMount(){
    let userId=firebase.auth().currentUser.uid;
    let userRef=firebase.database().ref("/users/"+userId);
    userRef.once('value').then((snap) => {

      this.setState({
        userType:snap.val().userType          
      })

      if(this.state.userType==0)
      {
       for (let data of datas) 
       {
        if(data.name==="Profil")
          data.route="Profile";
       }
      }
      else if(this.state.userType==1)
      {
        for (let data of datas) 
       {
         if(data.name==="Profil")
          data.route="ProfilBerber";      
       }
      }
    });
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
