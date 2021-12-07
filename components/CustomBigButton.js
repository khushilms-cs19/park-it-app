import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const CustomBigButton = (props) => {
    return (
        <View style={styles.signupButtonContainer}>
            <TouchableOpacity style={styles.signupButton} 
                onPress={props.onPress}>
                <Text style={styles.signupText}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomBigButton;

const styles = StyleSheet.create({
    signupButtonContainer:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginVertical: 30,
    },
    signupButton: {
        width: 200,
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
