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