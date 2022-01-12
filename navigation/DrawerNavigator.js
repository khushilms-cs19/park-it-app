import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import ProfileDetailsScreen from "../screens/Drawer-screens/ProfileDetailsScreen";
import ParkingHistoryScreen from "../screens/Drawer-screens/ParkingHistoryScreen";
import CustomerSupportScreen from "../screens/Drawer-screens/CustomerSupportScreen";
import CouponsScreen from "../screens/Drawer-screens/CouponsScreen";

const MainApplicationDrawer = createDrawerNavigator({
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
},{
    drawerWidth: 200,
})

export default MainApplicationDrawer