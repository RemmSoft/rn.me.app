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
    },
    container: {
      backgroundColor: "#FFF",
    },
    stretch: {
      width: 150,
      height: 150,
      borderRadius: 30,      
    },
    textStyle:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      marginTop:20
    },
    content:{
      flex: 1,
      flexDirection: 'column',
      alignItems:'center' 
    },
    icon:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      marginTop:27
    },
    btnWorker:{
      margin: 15,
      marginTop: 20,
      backgroundColor: "#6FAF98"
  }
};