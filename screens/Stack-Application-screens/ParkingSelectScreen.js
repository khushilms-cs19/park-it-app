import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ParkingSelectScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the parking select screen.</Text>
            <Button title="Next" onPress={()=>props.navigation.navigate("ServiceSelect")}/>
        </View>
    )
}

export default ParkingSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})

