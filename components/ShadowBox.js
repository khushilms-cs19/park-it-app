import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ShadowBox = (props) => {
    return (
        <View style={styles.centerboxContainer}>
                <View style={styles.centerbox}>
                    {
                        props.children
                    }
                </View>
        </View>
    )
}

export default ShadowBox;

const styles = StyleSheet.create({
    centerboxContainer: {
        // width: 250,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
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
        minHeight: 150,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
    },
})
