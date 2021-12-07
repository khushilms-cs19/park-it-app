import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const MainScreenButton = (props) => {
    const plainFiller = ()=>{}
    return (
        <View style={styles.signupButtonContainer}>
            <TouchableOpacity style={{...styles.signupButton, width: props.width || 200 }} 
                onPress={props.onPress || plainFiller}>
            {props.children}
            </TouchableOpacity>
        </View>
    )
}

export default MainScreenButton;

const styles = StyleSheet.create({
    signupButtonContainer:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginVertical: 10,
    },
    signupButton: {
        flexDirection: "row",
        backgroundColor: "black",
        borderRadius: 15,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 30,
        paddingVertical: 15,
    }, 
    signupText: {
        color: "white",
        fontFamily: "open-sans-bold",
        fontSize: 16,
    }
})
