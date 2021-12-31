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
            headerTitle: "My Profile",
        }
    },
    ParkingHistory: {
        screen: ParkingHistoryScreen,
    },
    CustomerSupport: {
        screen: CustomerSupportScreen,
    },
    Coupons: {
        screen: CouponsScreen,
    },
},{
    drawerWidth: 200,
    drawerStyle:{
        margin: 60,
    },
    contentOptions:{
        itemsContainerStyle: {
            marginVertical:30,
            marginHorizontal: 10,
            borderRadius: 10,
        },
        iconContainerStyle:{
            borderRadius: 10,
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