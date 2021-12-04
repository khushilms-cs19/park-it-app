import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const BookingSuccessScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the booking success screen.</Text>
            <Button title="Home" onPress={()=>props.navigation.popToTop()}/>
        </View>
    )
}

export default BookingSuccessScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})

