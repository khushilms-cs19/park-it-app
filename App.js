import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import MainApplication from './navigation/MainNavigator';


const fontAbsoluteAddressOpenSansBold = "D:/5th Sem/Project Work/Version 1/parkit/assets/fonts/OpenSans-Bold.ttf";
const fontAbsoluteAddressOpenSans = "D:/5th Sem/Project Work/Version 1/parkit/assets/fonts/OpenSans-Regular.ttf";
const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require(fontAbsoluteAddressOpenSans),
        "open-sans-bold": require(fontAbsoluteAddressOpenSansBold),
    });
}

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (!fontsLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} onError={(Err) => console.log(Err)} />
    }
    return <MainApplication/>
    // return (
    //     <View style={styles.container}>
    //         <Text>Open up App.js to start working on your app!</Text>
    //         <StatusBar style="auto" />
    //     </View>
    // );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
