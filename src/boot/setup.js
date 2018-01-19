import * as Expo from "expo";
import React, { Component } from "react";
import { StyleProvider } from "native-base";
import * as firebase from 'firebase';


import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

var config = {
    apiKey: "AIzaSyCUOrj5zRsyvP7UbCQlrP-gzfwhe2dxmhg",
    authDomain: "makaseller-e2305.firebaseapp.com",
    databaseURL: "https://makaseller-e2305.firebaseio.com",
    projectId: "makaseller-e2305",
    storageBucket: "makaseller-e2305.appspot.com",
    messagingSenderId: "576889564677"
  };
const firebaseApp = firebase.initializeApp(config);

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
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
        <App />
      </StyleProvider>
    );
  }
}
