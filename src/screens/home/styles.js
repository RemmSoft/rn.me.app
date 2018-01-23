const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    height:deviceHeight / 3,
    width: deviceWidth
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 40 : 50,
    top: Platform.OS === "android" ? 35 : 60,
    width: 280,
    height: 100
  },
  errorTextStyle:{
    color:'white'
  },
  text: {
    color: "#FFFFFF",
    bottom: 6,
    marginTop: 5
  },
  button:{
    margin: 15,
    marginTop: 50,
    backgroundColor: "#6FAF98"
  },
  colorWhite:{
    color: "white"
  }
};
