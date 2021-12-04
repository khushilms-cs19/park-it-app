import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const WelcomeScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the welcome screen.</Text>
            <Button title="Next" onPress={()=>props.navigation.navigate("AccountSelect")}/>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})
