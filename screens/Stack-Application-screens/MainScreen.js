import React from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from '../../components/DefaultText';
import CustomBigButton from '../../components/CustomBigButton';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import MainScreenButton from '../../components/MainScreenButton';
const MainScreen = (props) => {
    return (
        <View style={styles.screen}>
            {/* <Text>This is the main landing screen.</Text>
            <Button title="book parking space" onPress={() => props.navigation.navigate("LocationSelect")} /> */}
            <View style={styles.topContainer}>
                <View style={styles.topNavigation}>
                    <TouchableOpacity >
                        <DefaultText fontSize={14} color="white">Settings</DefaultText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <DefaultText fontSize={28} color="white">Profile</DefaultText>
                    </TouchableOpacity>
                    <TouchableOpacity>
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
            <View style={styles.nameContainer}>
                <Text style={styles.nameMain}>Ghanshyam</Text>
                <Text style={styles.nameMantra}>Aapka naam bhi Anuradha hai</Text>
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
        fontSize: 20,
    }
})
