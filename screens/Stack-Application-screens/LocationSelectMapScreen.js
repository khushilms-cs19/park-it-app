import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const LocationSelectMapScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the location select from map screen.</Text>
            <Button title="Select" onPress={()=>props.navigation.navigate("ParkingSelect")}/>
        </View>
    )
}

export default LocationSelectMapScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})

