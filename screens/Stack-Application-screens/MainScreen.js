import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions, Modal, TouchableOpacity} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import DefaultText from '../../components/DefaultText';
import CustomBigButton from '../../components/CustomBigButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import MainScreenButton from '../../components/MainScreenButton';
import MenuButton from '../../components/MenuButton';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import updateUserData from '../../redux/actions/userDataActions';
import { userDataConstants } from '../../redux/actionTypes/userDataConstants';
import { useSelector } from 'react-redux';
import AppLoading from 'expo-app-loading';

const MainScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const baseUrl = "https://park-it-proj.herokuapp.com/";
    const userData = useSelector((state)=>state.userData);
    const fetchData = async()=>{
        const token = await AsyncStorage.getItem("token");
        await axios.post(`${baseUrl}user/profile`,{},{
            headers: {
                Authorization: "Bearer "+token,
            }
        }).then((resp)=>{
            updateUserData(userDataConstants.USER_DATA_UPDATE_COMPLETE,resp.data);
        }).catch((err)=>{
            console.log("there some error with the data: ",err);
        });
    }
    useEffect(async()=>{
        
    },[])

    const logout = async()=>{
        await AsyncStorage.clear();
        props.navigation.navigate("Welcome");
        setModalVisible(false);
        console.log("User has logged out..");
    }
    const [dataLoaded, setDataLoaded] = useState(false);
    if(!dataLoaded){
        return <AppLoading startAsync={fetchData} onFinish={()=>setDataLoaded(true)} onError={(err)=>console.log(err)}/>
    }
    // if(userData!===)
    return (
        <View style={styles.screen}>
            {/* <Text>This is the main landing screen.</Text>
            <Button title="book parking space" onPress={() => props.navigation.navigate("LocationSelect")} /> */}
            
            {
                modalVisible &&
                <TouchableOpacity style={styles.modalOverlay}></TouchableOpacity>
            }
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{
                    console.log("main screen modal closed...")
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalMain}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalTop}>
                            <Text style={styles.modalTitle}>Are you sure you want to logout?</Text>
                        </View>
                        <View style={styles.modalBottom}>
                            <TouchableOpacity style={styles.modalButton} onPress={()=>logout()}>
                                <Text style={styles.modalButtonText}>Confirm</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={()=>setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.topContainer}>
                <View style={styles.topNavigation}>
                    <TouchableOpacity >
                        <DefaultText fontSize={14} color="white">Settings</DefaultText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("MyProfile")}>
                        <DefaultText fontSize={28} color="white">Profile</DefaultText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setModalVisible(true)}>
                        <DefaultText fontSize={14} color="white">Logout</DefaultText>
                    </TouchableOpacity>
                </View>
                <View style={styles.profileImageContainer}>
                    <Image 
                        source={{uri:"https://memetemplatehouse.com/wp-content/uploads/2020/05/main-toh-sirf-pati-banna-chahta-hun-shyam-hera-pheri.jpg"}}
                        fadeDuration={1000}
                        style={styles.profileImage}
                        resizeMode="cover"
                    />
                </View>
            </View>
            <View>
                <MenuButton {...props}/>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameMain}>{userData!=={} && userData.name[0].toUpperCase()+userData.name.slice(1) || "User"}</Text>
                <Text style={styles.nameMantra}>{"Book a parking spot now..."}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <MainScreenButton width={Dimensions.get("window").width*0.8}
                    onPress={() => props.navigation.navigate("LocationSelect")}
                    navigation={props.navigation}
                >
                    <Text style={styles.buttonText}>Book a parking space</Text>
                    <FontAwesome5 name="car-side" size={24} color="#ccc"/>
                </MainScreenButton>
                <MainScreenButton width={Dimensions.get("window").width*0.8}>
                    <Text style={styles.buttonText}>Book a car service</Text>
                    <Entypo name="tools" size={24} color="#ccc" />
                </MainScreenButton>
                <MainScreenButton width={Dimensions.get("window").width*0.8}>
                    <Text style={styles.buttonText}>Book a parking space</Text>
                    <AntDesign name="tag" size={24} color="#ccc" />
                </MainScreenButton>
            </View>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    topContainer: {
        backgroundColor: "black",
        alignItems: "center",
        paddingVertical: 20,
    },
    topNavigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }, 
    profileImageContainer:{
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: "hidden",
        margin: 30,
        marginBottom: 10,
        borderColor: "white",
        borderWidth: 5,
    },
    profileImage: {
        width: "100%",
        height: "100%",
    },
    nameContainer: {
        alignItems: "center",
        margin: 20,
    },
    nameMain: {
        fontSize: 30,
        fontFamily: "open-sans-bold",
        margin: 5,
    },
    nameMantra: {
        fontFamily: "open-sans-bold",
        fontSize: 14,
    },
    buttonsContainer: {
        flexDirection: "column",
        padding: 20,
    },
    buttonText: {
        color: "white",
        fontFamily: "open-sans",
        fontSize: 18,
    },
    modalOverlay:{
        position: 'absolute',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "black",
        opacity: 0.7,
        zIndex: 10,
    },
    modalMain:{
        flex: 1,
        justifyContent: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        elevation: 20,
        alignSelf: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 20,
        width: Dimensions.get("window").width*0.9,
    },
    modalTop:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    modalTitle: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
    },
    modalBottom: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginVertical: 20,
    },
    modalButton: {
        backgroundColor: "black",
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    modalButtonText:{
        fontFamily: "open-sans-bold",
        color: "white",
        fontSize: 15,
    }
})
