import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./screens/sidebar";
import Home from "./screens/home/";
import Dashboard from "./screens/dashboard";
import HairStyles from "./screens/hairStyles";
import HairStylePage from "./screens/hairStylePage";
import Register from "./screens/register";
import Profile from "./screens/profile";
import ProfilBerber from "./screens/profilBerber";
import Employee from "./screens/worker";

const Drawer = DrawerNavigator(
  {
    Home: {screen: Home},
    Dashboard:{screen: Dashboard},
    HairStyles:{screen: HairStyles},
    HairStylePage:{screen: HairStylePage},
    Register :{screen: Register},
    Profile:{screen: Profile},
    ProfilBerber:{screen: ProfilBerber},
    Employee:{screen: Employee},
    
  },
  {
    initialRouteName: "Home",
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
