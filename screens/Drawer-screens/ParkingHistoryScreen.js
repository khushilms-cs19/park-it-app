import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ParkingHistoryScreen = () => {
    return (
        <View  style={styles.screen}>
            <Text>This is the parking history screen.</Text>
        </View>
    )
}

export default ParkingHistoryScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    }
})
