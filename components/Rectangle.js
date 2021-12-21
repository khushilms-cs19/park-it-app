import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native"


export const Rectangle = (props) => {

    if (props.title == "filler") {
        return (
            <View style={styles.fillerRectangle}>
            </View>
        )
    }    

    return (
        <View style={styles.rectangle}>
            
            <Text>{props.title}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: Dimensions.get("window").width*0.8,
        height: Dimensions.get("window").height*0.3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 10
    },
    fillerRectangle: {
        width: Dimensions.get("window").width*0.2,
        height: Dimensions.get("window").height*0.3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 10,
    },
})