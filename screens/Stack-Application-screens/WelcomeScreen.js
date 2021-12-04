import React from 'react'
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import DefaultText from '../../components/DefaultText';
const WelcomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <View style={styles.centerboxContainer}>
                <View style={styles.centerbox}>
                    <DefaultText>Welcome to Parkit!</DefaultText>
                    <View style={styles.forwardButtonContainer}>
                        <TouchableOpacity activeOpacity={0.6} style={styles.touchable} onPress={()=>props.navigation.navigate("AccountSelect")}>
                            <Ionicons name="arrow-forward" color="white" size={26}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    centerboxContainer: {
        width: 250,
        height: 200,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    centerbox: {
        borderRadius: 30,
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        
    },
    forwardButtonContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "black",
    },
    touchable: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})
