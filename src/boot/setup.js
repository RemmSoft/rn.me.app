import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import * as firebase from 'firebase';

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";


export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
    firebase.initializeApp({
      apiKey: "AIzaSyBmIgCRWyYm3d9h8vAr4PpnK2WtzGr86ug",
      authDomain: "rn-me-6c102.firebaseapp.com",
      databaseURL: "https://rn-me-6c102.firebaseio.com",
      projectId: "rn-me-6c102",
      storageBucket: "rn-me-6c102.appspot.com",
      messagingSenderId: "397297760244"
    });
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <StyleProvider style={getTheme(variables)}>
        <App/>
      </StyleProvider>
    );
  }
}
