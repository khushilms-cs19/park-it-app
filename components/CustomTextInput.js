import React from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'

const CustomTextInput = (props) => {
    return (
        <TextInput placeholder={props.placeholder} defaultValue={props.defaultValue || ""} style={styles.textInput} secureTextEntry={props.passwordTrue || false} onChangeText={props.onChangeHandler || null}/>
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
        width: "100%",
        fontSize: 18,
    },

})
