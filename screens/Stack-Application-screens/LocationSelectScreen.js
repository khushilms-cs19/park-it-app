import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const LocationSelectScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the location Select screen.</Text>
            <Button title="Select Map" onPress={()=>props.navigation.navigate("LocationSelectMap")}/>
        </View>
    )
}

export default LocationSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})
