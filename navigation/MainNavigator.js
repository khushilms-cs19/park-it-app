import React from 'react';
import { createAppContainer } from "react-navigation";
import {MainApplicationNavigator,initialStackNavigator} from './StackNavigator';
import { createDrawerNavigator } from "react-navigation-drawer";
import ProfileDetailsScreen from "../screens/Drawer-screens/ProfileDetailsScreen";
import ParkingHistoryScreen from "../screens/Drawer-screens/ParkingHistoryScreen";
import CustomerSupportScreen from "../screens/Drawer-screens/CustomerSupportScreen";
import CouponsScreen from "../screens/Drawer-screens/CouponsScreen";
import { createStackNavigator } from 'react-navigation-stack';

const MainApplicationDrawer = createDrawerNavigator({
    Home: {
        screen: MainApplicationNavigator,
    },
    MyProfile: {
        screen: ProfileDetailsScreen,
        navigationOptions: {
            title: "My Profile",
        }
    },
    ParkingHistory: {
        screen: ParkingHistoryScreen,
        navigationOptions: {
            title: "Parking History",
        }
    },
    CustomerSupport: {
        screen: CustomerSupportScreen,
        navigationOptions: {
            title: "Customer Support",
        }
    },
},{
    drawerWidth: 250,
    drawerStyle:{
        margin: 70,
    },
    contentOptions:{
        itemStyle:{
            borderRadius: 10,
            marginVertical: 10,
        },
        itemsContainerStyle: {
            marginVertical:40,
            marginHorizontal: 10,
            borderRadius: 10,
        },
        iconContainerStyle:{
            borderRadius: 10,
            marginVertical: 10,
        },
        activeTintColor: "white",
        activeBackgroundColor: "black",
    },
    drawerActiveTintColor: "white",
    drawerActiveBackgroundColor: "black",
    navigationOptions:{
    }
});
const MainApplicationStack = createStackNavigator({
    InitialSetup:{
        screen: initialStackNavigator,
    },
    Main: {
        screen: MainApplicationDrawer,
    }
}, {
    defaultNavigationOptions: {
        headerShown: false,
    },
})


const MainApplication = createAppContainer(MainApplicationStack);
export default MainApplication;