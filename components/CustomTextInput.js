import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const CustomTextInput = (props) => {
    return (
        <TextInput placeholder={props.placeholder}  style={styles.textInput}/>
    )
}

export default CustomTextInput;

const styles = StyleSheet.create({
    textInput: {
        height: 50,
        marginVertical: 15,
        backgroundColor: "#f9f9f9",
        borderColor: "#eee",
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontFamily: "open-sans-bold",
    },

})