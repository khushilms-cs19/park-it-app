import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CouponsScreen = () => {
    return (
        <View style={styles}>
            <Text>This is the coupons page.(Optional)</Text>
        </View>
    )
}

export default CouponsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    }
})

