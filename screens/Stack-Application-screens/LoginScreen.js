import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

const LoginScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is the login screen.</Text>
            <Button title="Log in" onPress={() =>{
                const navigateAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: "Main"})],        
                });
                props.navigation.dispatch(navigateAction);
            }
            }  
            />
                
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
