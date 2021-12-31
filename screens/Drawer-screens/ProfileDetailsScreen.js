import React, {useEffect, useState} from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Keyboard, ScrollView, Modal, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import CustomBigButton from '../../components/CustomBigButton';
import CustomTextInput from '../../components/CustomTextInput';
import DefaultText from '../../components/DefaultText';
import MenuButton from '../../components/MenuButton';

const ProfileDetailsScreen = (props) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const changeUserPassword = ()=>{
        console.log("The user password changed")
        setModalVisible(false);
    }
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); 
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            {
                modalVisible &&
                <TouchableOpacity style={styles.modalOverlay} onPress={()=>setModalVisible(false)}></TouchableOpacity>
            }
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalMain}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Change Password</Text>
                        <View>
                            <CustomTextInput placeholder='New password'/>
                            <CustomTextInput placeholder='Confirm new password'/>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.modalButton} onPress={changeUserPassword}>
                                    <Text style={styles.buttonText}>Confirm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalButton} onPress={()=>setModalVisible(false)}>
                                    <Text style={styles.buttonText}>Exit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            <MenuButton {...props} />
                {
                    !isKeyboardVisible &&
                        <View>
                    <View style={styles.doubleBorder}>
                        <View style={styles.profileImageContainer}>
                            <Image source={{ uri: "https://memetemplatehouse.com/wp-content/uploads/2020/05/main-toh-sirf-pati-banna-chahta-hun-shyam-hera-pheri.jpg" }}
                            fadeDuration={1000}
                            style={styles.profileImage}
                            resizeMode="cover"
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.profilePicEdit}>
                        <DefaultText color="white" fontSize={15}>Edit profile Pic.</DefaultText>
                    </TouchableOpacity>
                </View>
                }
            <View style={styles.userDataFields}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <CustomTextInput placeholder={"Enter your First name.."}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Last Name</Text>
                    <CustomTextInput placeholder={"Enter your last name.."}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Email id</Text>
                    <CustomTextInput placeholder={"Enter your email id.."}/>
                </View>
                <TouchableOpacity style={styles.changePassword} onPress={()=>setModalVisible(true)}>
                    <Text style={styles.changePasswordText}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        padding: 40,
        alignItems: "center",
    },
    profileImage: {
        borderColor: "black",
        borderWidth: 5,
        width: "100%",
        height: "100%",
    },
    profileImageContainer:{
        width: 150,
        height: 150,
        overflow: "hidden",
        borderRadius: 75,
        borderColor: "white",
        borderWidth: 3,
    },
    doubleBorder: {
        borderColor: "black",
        borderWidth:6,
        width: 155,
        height: 155,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
    },
    profilePicEdit: {
        backgroundColor: "black",
        borderRadius: 20,
        margin: 10,
    },
    userDataFields:{
        marginVertical: 20,
    },
    inputContainer: {
        width: Dimensions.get("window").width*0.8,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginVertical: 10,
    },
    inputLabel:{
        fontFamily: "open-sans-bold",
        marginHorizontal: 10,
    },
    inputField: {
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10, 
        width: Dimensions.get("window").width *0.8,
        fontFamily: "open-sans",
        color: "#737373",
        fontSize: 18,
    },
    changePassword: {
        backgroundColor: "black",
        borderRadius: 20,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center", 
        margin: 0,
    },
    changePasswordText: {
        fontFamily: "open-sans-bold",
        color: "white",
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
        padding: 20,
        borderRadius: 20,
        width: Dimensions.get("window").width*0.9,
    },
    modalButton:{
        backgroundColor: "black",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10, 
        minWidth: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    buttonText:{
        fontSize: 16,
        color: "white",
        fontFamily: "open-sans-bold",
    },
    modalTitle:{
        fontFamily: "open-sans-bold",
        fontSize: 18,
        textAlign: "center",
    }
})
