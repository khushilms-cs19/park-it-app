import React from 'react'
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Ionicons} from "@expo/vector-icons"
import DefaultText from '../../components/DefaultText';
import ShadowBox from '../../components/ShadowBox';
const WelcomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <ShadowBox>
                <DefaultText>Welcome to Parkit!</DefaultText>
                <View style={styles.forwardButtonContainer}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.touchable} onPress={()=>props.navigation.navigate("AccountSelect")}>
                        <Ionicons name="arrow-forward" color="white" size={30}/>
                    </TouchableOpacity>
                </View>
            </ShadowBox>
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
    forwardButtonContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "black",
        margin:20,
    },
    touchable: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})
