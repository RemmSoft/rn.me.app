const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default{
    viewMargin:{
        marginTop: deviceHeight/2
    },
    button:{
        margin: 15,
        marginTop: 25,
        backgroundColor: "#6FAF98"
    }
};
