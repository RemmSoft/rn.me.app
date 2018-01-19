import React from "react";
import Setup from "./src/boot/setup";

var config = {
    apiKey: "AIzaSyCUOrj5zRsyvP7UbCQlrP-gzfwhe2dxmhg",
    authDomain: "makaseller-e2305.firebaseapp.com",
    databaseURL: "https://makaseller-e2305.firebaseio.com",
    projectId: "makaseller-e2305",
    storageBucket: "makaseller-e2305.appspot.com",
    messagingSenderId: "576889564677"
  };
const firebase = firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return <Setup />;
  }
}
