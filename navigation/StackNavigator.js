import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../screens/Stack-Application-screens/WelcomeScreen';
import AccountSelectScreen from "../screens/Stack-Application-screens/AccountSelectScreen";
import SignupScreen from '../screens/Stack-Application-screens/SignupScreen';
import LoginScreen from '../screens/Stack-Application-screens/LoginScreen';
import MainScreen from '../screens/Stack-Application-screens/MainScreen';
import LocationSelectScreen from '../screens/Stack-Application-screens/LocationSelectScreen';
import LocationSelectMapScreen from '../screens/Stack-Application-screens/LocationSelectMapScreen';
import ParkingSelectScreen from '../screens/Stack-Application-screens/ParkingSelectScreen';
import ServiceSelectScreen from '../screens/Stack-Application-screens/ServiceSelectScreen';
import BookingSuccessScreen from '../screens/Stack-Application-screens/BookingSuccessScreen';
import CurrentBookingScreen from '../screens/Stack-Application-screens/CurrentBookingScreen';

const MainApplicationNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
    },
    AccountSelect: {
        screen: AccountSelectScreen,
    },
    SignUp: {
        screen: SignupScreen,
    },
    Login: {
        screen: LoginScreen,
    },
    Main: {
        screen: MainScreen,
    },
    LocationSelect: {
        screen: LocationSelectScreen,
    },
    LocationSelectMap: {
        screen: LocationSelectMapScreen,
    },
    ParkingSelect: {
        screen: ParkingSelectScreen,
    },
    ServiceSelect: {
        screen: ServiceSelectScreen,
    },
    BookingSuccess: {
        screen: BookingSuccessScreen,
    }
});

export default MainApplicationNavigator;