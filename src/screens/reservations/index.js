import React, { Component } from 'react';
import { Container, Header, Content, Title, Body, List, ListItem, Card, CardItem, 
    Text, Icon, Left, Right, Button, CheckBox } from 'native-base';
import {ListView, View} from "react-native";
import firebase from 'firebase';

export default class Reservations extends Component {
    constructor(props){
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state = {      
          itemDataSource: ds, 
          employeeDataSource: ds
        }
        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount(){
        let userId=firebase.auth().currentUser.uid;
        let childData=[];
        
        let leadsRef = firebase.database().ref('reservations/');
        leadsRef.on('value', (snapshot)=> {
            snapshot.forEach((childSnapshot)=> {
                if(userId===childSnapshot.val().customer_id){                  
                    childData.push({
                        selectTime: childSnapshot.val().selectTime,
                        datetime: childSnapshot.val().datetime,
                        employee_id: childSnapshot.val().employee_id,
                        ownerPhone: childSnapshot.val().ownerPhone,
                        name:"",
                        ownerId:0
                    });
                }
            });
            this.setState({
                itemDataSource: this.state.itemDataSource.cloneWithRows(childData)
            });
        });
        //owner mı berber mi ??        
        
        let Ref = firebase.database().ref('berbers/');
        Ref.on('value', (snapshot)=> {
            childData.forEach(element => {
                snapshot.forEach((childSnapshot)=> {
                    childSnapshot.forEach((exChildSnapshot)=>{
                        //berberler
                        if (exChildSnapshot.key===element.employee_id) {
                            element.ownerId= childSnapshot.key,
                            element.name= exChildSnapshot.val().name,
                            element.phone=exChildSnapshot.val().phone
                            //console.log(childSnapshot.key)
                        }
                        //console.log(exChildSnapshot.key);
                        else {
                            exChildSnapshot.forEach((test)=>{
                                //console.log(exChildSnapshot.val().name);
                                
                                if (childSnapshot.key===element.employee_id) {
                                    //console.log(element.employee_id);
                                    element.name=exChildSnapshot.val().name
                                }
                               
                                
                            });
                        }
                    });
                });
            });
            this.setState({
                employeeDataSource: this.state.employeeDataSource.cloneWithRows(childData)
            });
        });
    }

    renderRow(item){
        //console.log(item);
        return(   
            <ListItem>
              <Card>
              <CardItem>
              <Left>
              <Icon active name="home" />
              <Text>{item.name}</Text>
              </Left>
              <Right>
                  <Text>{item.phone}</Text>
              </Right>
              </CardItem>
              <CardItem>
              <Left>
              <Icon active name="calendar" />
              <Text>{item.datetime}</Text>
              </Left>
              <Right>
                  <Text>{item.selectTime}</Text>
              </Right>
              </CardItem>
              </Card>
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
                <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>Randevularım</Title>
            </Body>
            <Right />
            </Header>
            <Content>
              <List>
                <ListView
                dataSource={this.state.itemDataSource}
                dataSource={this.state.employeeDataSource}
                renderRow={this.renderRow} 
                />
              </List>
            </Content>
        </Container>
        );
    }
}