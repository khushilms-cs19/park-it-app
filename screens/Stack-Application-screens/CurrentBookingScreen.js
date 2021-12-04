import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CurrentBookingScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>
                This is the current booking screen.
            </Text>
        </View>
    )
}

export default CurrentBookingScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})

