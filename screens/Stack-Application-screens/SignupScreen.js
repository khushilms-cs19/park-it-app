import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const SignupScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the signup screen</Text>
            <Button title="Sign Up" onPress={()=>props.navigation.navigate("Main")}/>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})
