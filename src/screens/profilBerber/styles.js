const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default{
    viewMargin:{
        marginTop: deviceHeight/2
    },
    tabText:{
        color:"black"
    },
    button:{
        margin: 15,
        marginTop: 20,
        backgroundColor: "#ef5350"
    },
    btnWorker:{
        margin: 15,
        marginTop: 20,
        backgroundColor: "#6FAF98"
    }
};