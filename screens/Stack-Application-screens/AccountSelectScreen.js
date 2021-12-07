import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import ShadowBox from "../../components/ShadowBox";
const AccountSelectScreen = (props) => {
    return (
        <View style={styles.screen}>
            <ShadowBox>
                <Text style={styles.centerText}>Do you have an account?</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.buttonMain, backgroundColor: "black"}} onPress={()=>props.navigation.navigate("SignUp")}>
                        <Entypo name="cross" size={24} color="white" />
                        <Text style={{...styles.buttonMainText, color: "white"}}>No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.buttonMain, backgroundColor: "white"}}  onPress={()=>props.navigation.navigate("Login")}>
                        <Feather name="check" size={24} color="black" />
                        <Text style={{...styles.buttonMainText}} >Yes</Text>
                    </TouchableOpacity>
                </View>
            </ShadowBox>
        </View>
    )
}

export default AccountSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },  
    centerText: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        marginVertical: 20,
    },
    buttonContainer: {
        flex: 1,
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    buttonMain:{
        width: 80,
        borderRadius: 10,
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        borderColor: "black",
        borderWidth: 2,
    },
    buttonMainText: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
    },


})
