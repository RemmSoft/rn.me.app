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
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: {width:0, height:2},
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    },
    subStyle:{
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: "#fff",
      justifyContent: 'flex-start',
      flexDirection: 'column',
      borderColor: '#ddd',
      position: 'relative'
    },
    listItemContainer:{
      height:38,
      borderRadius:12,
      borderWidth:1,
      borderColor:'#979797',
      margin:14,
      position:'relative',
      backgroundColor: '#79CDCD',
  
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:31,
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