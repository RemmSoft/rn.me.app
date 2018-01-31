const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    imageContainer: {
      width: deviceWidth,
      backgroundColor:'white'
    },
    Icon:{
      marginRight: 15,
      color:'red'
    },
    button:{
      margin: 15,
      marginTop: 20,
      backgroundColor: "#6FAF98"
    }
};
