const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
    imageContainer: {
      width: deviceWidth,
      backgroundColor:'white'
    },
    li: {
      backgroundColor: '#fff',
      borderBottomColor: '#eee',
      borderColor: 'transparent',
      borderWidth: 1,
      paddingLeft: 16,
      paddingTop: 14,
      paddingBottom: 16
    },liText:{
      color: '#333',
      fontSize: 16
    }
};