import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import MainApplication from './navigation/MainNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';



// const fontAbsoluteAddressOpenSansBold = path.resolve(__dirname, './assets/fonts/OpenSans-Bold.ttf');
// const fontAbsoluteAddressOpenSans = path.resolve(__dirname, './assets/fonts/OpenSans-Regular.ttf');
const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
        "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
    });
}

export default function App() {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (!fontsLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} onError={(Err) => console.log(Err)} />
    }
    return (
        <Provider store={store}>
            <MainApplication />
        </Provider>
    )
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
