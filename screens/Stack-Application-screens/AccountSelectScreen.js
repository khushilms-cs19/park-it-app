import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

const AccountSelectScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the account select screen</Text>
            <Button title="Login" onPress={()=>props.navigation.navigate("Login")}/>
            <Button title="Signin" onPress={()=>props.navigation.navigate("SignUp")}/>
        </View>
    )
}

export default AccountSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
})
