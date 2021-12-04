import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
const MainScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the main landing screen.</Text>
            <Button title="book parking space" onPress={() => props.navigation.navigate("LocationSelect")} />
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
