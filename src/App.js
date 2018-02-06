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
import Employee from "./screens/employee";
import EmployeeList from "./screens/employeeList";
import Appointment from "./screens/appointment";
import DateTime from "./screens/appointment/dateTime";

const Drawer = DrawerNavigator(
  {
    Dashboard:{screen: Dashboard},
    HairStyles:{screen: HairStyles},
    HairStylePage:{screen: HairStylePage},
    Profile:{screen: Profile},
    ProfilBerber:{screen: ProfilBerber},
    Employee:{screen: Employee},
    EmployeeList:{screen: EmployeeList},
    Appointment:{screen: Appointment},
    DateTime:{screen: DateTime}
  },
  {
    initialRouteName: "Dashboard",
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: "#ffffff"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Home: {screen: Home},
    Register :{screen: Register},
    Drawer: {screen: Drawer}
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions:{
      gesturesEnabled: false
    },
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
