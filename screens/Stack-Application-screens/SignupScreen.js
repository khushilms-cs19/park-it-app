import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackActions, NavigationActions } from 'react-navigation';
import {Ionicons} from "@expo/vector-icons";
const SignupScreen = (props) => {
    return (
        <View style={styles.screen}>
            
            <Text>This is the signup screen</Text>
            <Button title="Sign Up" onPress={() =>{
                const navigateAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: "Main"})],        
                });
                props.navigation.dispatch(navigateAction);
            }}/>
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
