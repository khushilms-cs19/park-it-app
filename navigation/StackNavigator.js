import React from 'react';
import { View } from 'react-native';
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
import { Ionicons } from "@expo/vector-icons";
import { TransitionPresets } from 'react-navigation-stack';

const initialStackNavigator = createStackNavigator({
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    AccountSelect: {
        screen: AccountSelectScreen,
        navigationOptions: {
            headerTitle: "Parkit!",
            headerStyle: {
                backgroundColor: "white",
            },
            headerTitleStyle: {
                color: "black",
                fontFamily: "open-sans-bold",
                textAlign: "center",
                fontSize: 30,
            },

        }
    },
    SignUp: {
        screen: SignupScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
}, {
        defaultNavigationOptions: {
            gestureDirection: "horizontal",
            animationEnabled: "true",
            headerStyle: {
                backgroundColor: "black",
            },
            headerTitleStyle: {
                fontFamily: "open-sans-bold",
                color: "white",
                textAlign: "center",
            },
            headerTitleColor: "white",
            headerLeft: ()=>null,
        }
})

const MainApplicationNavigator = createStackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    LocationSelect: {
        screen: LocationSelectScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    LocationSelectMap: {
        screen: LocationSelectMapScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    ParkingSelect: {
        screen: ParkingSelectScreen,
        navigationOptions: {
            headerTitle: "Select Parking Spot"
        }
    },
    ServiceSelect: {
        screen: ServiceSelectScreen,
        navigationOptions: {
            headerTitle: "Select Services"
        }
    },
    BookingSuccess: {
        screen: BookingSuccessScreen,
        navigationOptions: {
            headerTitle: "Parkit"
        }
    }
}, {
    navigationOptions: (navData)=>{
        return {
            headerLeft: null,
                    // <Ionicons name="arrow-back" size={24} color="white" onPress={()=>navData.navigation.goBack()}/>,
            transitionSpec: {
                open: TransitionPresets.SlideFromRightIOS,
                close: TransitionPresets.SlideFromRightIOS,
            }
        }
    },
    defaultNavigationOptions: {
        gestureDirection: "horizontal",
        animationEnabled: "true",
        headerStyle: {
            backgroundColor: "black",
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            color: "white",
            textAlign: "center",
        },
        headerTitleColor: "white",
        headerLeft: ()=>null,
    }
});

export {
    MainApplicationNavigator,
    initialStackNavigator,
};