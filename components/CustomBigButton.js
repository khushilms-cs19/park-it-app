import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AntDesign from "@expo/vector-icons";

const CustomBigButton = (props) => {
    const plainFiller = ()=>{}
    return (
        <View style={styles.signupButtonContainer}>
            <TouchableOpacity style={{...styles.signupButton, width: props.width || 200 }} 
                onPress={props.onPress || plainFiller}>
                <Text style={styles.signupText}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomBigButton;

const styles = StyleSheet.create({
    signupButtonContainer:{
        flex: 1,
        marginVertical: 30,
        alignItems: "center",
    },
    signupButton: {
        backgroundColor: "black",
        height: 50,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    }, 
    signupText: {
        color: "white",
        fontFamily: "open-sans-bold",
        fontSize: 16,
    }
})
