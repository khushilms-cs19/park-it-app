import React from 'react'
import { StyleSheet, Text } from 'react-native'

const DefaultText = (props) => {
    return (
            <Text style={{...styles.text, fontSize: props.fontSize || 22, color: props.color || "black"}}>{props.children}</Text>
    )
}

export default DefaultText;

const styles = StyleSheet.create({
    text: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        margin: 20,
    }
})
