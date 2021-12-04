import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ServiceSelectScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the service select screen.</Text>
            <Button title="Confirm" onPress={()=>props.navigation.navigate("BookingSuccess")}/>
        </View>
    )
}

export default ServiceSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})

