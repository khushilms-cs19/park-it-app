import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomerSupportScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>This is the customer support page.</Text>
        </View>
    )
}

export default CustomerSupportScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    }
});
