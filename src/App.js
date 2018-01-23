import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./screens/sidebar";
import Home from "./screens/home/";
import Dashboard from "./screens/dashboard";
import HairStyles from "./screens/hairStyles";
import HairStylePage from "./screens/hairStylePage";



const Drawer = DrawerNavigator(
  {
    Home: {screen: Home},
    Dashboard:{screen: Dashboard},
    HairStyles:{screen: HairStyles},
    HairStylePage:{screen: HairStylePage}
  },
  {
    initialRouteName: "Dashboard",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }

);

const AppNavigator = StackNavigator(
  {
    Drawer: {screen: Drawer}
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
