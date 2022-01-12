import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, Keyboard, Dimensions, Alert, AsyncStorageStatic } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { StackActions, NavigationActions } from 'react-navigation';
import {Ionicons} from "@expo/vector-icons";
import CustomTextInput from '../../components/CustomTextInput';
import CustomBigButton from '../../components/CustomBigButton';
import axios from 'axios';

const SignupScreen = (props) => {
    const baseUrl = "https://park-it-proj.herokuapp.com/";
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const changeUserName = (value)=>{
        setUserName(value);
    } 
    const changeEmail = (value)=>{
        setEmail(value);
    }
    const changePassword = (value)=>{
        setPassword(value);
    }
    const changePhone = (value)=>{
        setPhone(value);
    }
    const signup = async()=>{
        await axios.post(`${baseUrl}signup/`,{
            name: userName,
            email: email,
            password: password,
            phone: phone
        }).then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log("There some error : ", err);
        });
    }
    
    console.log(userName, email, password);
    return (
        <View style={styles.screen}>
            <View style={styles.headerContainer}>
                <Text style={styles.headingPrimary}>Sign Up</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} style={{flex:1}}>

                    {/* <Text>This is the signup screen</Text>
                    <Button title="Sign Up" onPress={() =>{
                        const navigateAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({routeName: "Main"})],        
                        });
                        props.navigation.dispatch(navigateAction);
                    }}/> */}

                    <View style={styles.inputContainer}>
                        <CustomTextInput placeholder={"Name"} onChangeHandler = {changeUserName}/>
                        <CustomTextInput placeholder={"Email"} onChangeHandler={changeEmail}/>
                        <CustomTextInput placeholder={"Phone number"} onChangeHandler={changePhone}/>
                        <CustomTextInput placeholder={"Password"} onChangeHandler={changePassword} passwordTrue={true}/>
                    </View>
                    <CustomBigButton onPress={async() =>{
                        try{
                            await signup();
                            // const navigateAction = StackActions.reset({
                            //     index: 0,
                            //     actions: [NavigationActions.navigate({routeName: "Main"})],        
                            // });
                            // props.navigation.dispatch(navigateAction);
                            props.navigation.navigate("Login")
                        }catch{
                            Alert.alert("Signup Error","There was an error in sign up, try again later",[
                                {
                                    text: "Try Again",
                                    onPress: ()=> console.log("try again clicked"),
                                }
                            ])
                        }
                    }} navigation={props.navigation}>
                        <Text>
                            Sign Up
                        </Text>
                    </CustomBigButton>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
        paddingVertical: 30,
    },  
    headerContainer: {  
        width: "100%",
        flexDirection: "row",
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    headingPrimary: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        justifyContent: "center",
    },
    headingSecondary: {
        fontFamily: "open-sans-bold",
        fontSize: 15,
    },
    inputContainer: {
        width: Dimensions.get("window").width*0.85,
        flexDirection: "column",
    },
})
