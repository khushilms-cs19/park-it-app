import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput, Keyboard, Modal, TouchableOpacity, FlatList } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import DefaultText from '../../components/DefaultText';
import LocationSearched from '../../components/LocationSearched';
import { useSelector } from 'react-redux';
import MenuButton from '../../components/MenuButton';
const LocationSelectScreen = (props) => {
    const [noLocationText, setNoLocationText] = useState("Search of a place...");
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [locationSearch, setLocationSearch] = useState();
    const [searchedList, setSearchedList] = useState([]);
    const userData = useSelector((state)=>state.userData);
    const locationData = [
        {
            id: 1,
            name: "mantri square",
            location: "Malleswaram, Bangalore."
        },
        {
            id: 2,
            name: "orion mall.",
            location: "Rajajinagar, Bangalore."
        },
        {
            id: 3,
            name: "church street social",
            location: "Church Street, Bangalore."
        },
        {
            id: 4,
            name: "ulsoor lake",
            location: "Halasuru, Bangalore."
        },
        {
            id: 5,
            name: "truffles",
            location: "Koromangala, Bangalore."
        },
        {
            id: 6,
            name: "lalit ashok",
            location: "Kumara Krupa Road, Bangalore."
        },
    ];
    const [selectedIndex, setSelectedIndex] = useState(2);
    const searchForLocations = (event)=>{
        let list = [];
        let value = event.toLowerCase();
        setLocationSearch(event);
        if(event===""){
            setNoLocationText("Search for a place...");
            setSearchedList([]);
            return;
        }
        locationData.forEach((location)=>{
            if(location.name.includes(value)){
                list = [...list, location] 
            }
        });
        if(list.length===0 && event!=""){
            setNoLocationText("Destination not found...");
        }
        setSearchedList(list);
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
    const goToLocationMap = ()=>{
        props.navigation.navigate("LocationSelectMap",{
            selectedLocation: selectedIndex,
        });
        setLocationSearch("");
        setSearchedList([]);
    }
    const [modalVisible, setModalVisible] = useState(false);
    const logout = ()=>{
        props.navigation.navigate("Welcome");
        setModalVisible(false);
        console.log("User has logged out..");
    }
    return (
        <View style={styles.screen}>
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
            {
                !isKeyboardVisible &&
                <View style={styles.topContainer}>
                    <View style={styles.topNavigation}>
                        <TouchableOpacity >
                            <DefaultText fontSize={14} color="white">Settings</DefaultText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate("MyProfile")}>
                            <DefaultText fontSize={28} color="white" >Profile</DefaultText>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setModalVisible(true)}>
                            <DefaultText fontSize={14} color="white" >Logout</DefaultText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={{ uri: "https://memetemplatehouse.com/wp-content/uploads/2020/05/main-toh-sirf-pati-banna-chahta-hun-shyam-hera-pheri.jpg" }}
                            fadeDuration={1000}
                            style={styles.profileImage}
                            resizeMode="cover"
                        />
                    </View>
                </View>
            }
            <View>
                <MenuButton {...props}/>
            </View>
            <View style={styles.nameContainer}>
                <Text style={styles.nameMain}>{userData!=={} && userData.name[0].toUpperCase()+userData.name.slice(1) || "User"}</Text>
                <Text style={styles.nameMantra}>{"Book a parking spot now..."}</Text>
            </View>
            <View style={styles.searchLocationMain}>
                <View style={styles.searchLocationContainer}>
                    <TextInput placeholder={"Enter the destination..."} onChangeText={searchForLocations} value={locationSearch} style={{width:"90%"}}/>
                    <Ionicons name="ios-search" size={24} color="#bbb" />
                </View>
                <View>
                    <FlatList
                        data={searchedList}
                        renderItem={(item,index)=>{
                            return <LocationSearched 
                                key={index} 
                                name={item.item.name} 
                                onPress={()=>setSelectedIndex(item.item.id)} 
                                location={item.item.location} 
                                goToLocationMap={()=>{
                                        console.log(index);
                                        props.navigation.navigate("LocationSelectMap",{
                                            selectedLocation: item.item.id,
                                        });
                                        setLocationSearch("");
                                        setSearchedList([]);
                                    }
                                }/>
                        }}
                    />
                    {/* {
                        searchedList.length>0 ?
                        searchedList.map((location, index)=>{
                            return <LocationSearched key={index} name={location.name} location={location.location} goToLocationMap={goToLocationMap}/>
                        }):
                        <Text style={styles.noLocationFound}>
                            {noLocationText}
                        </Text>
                    } */}
                </View>
            </View>
        </View>
    )
}

export default LocationSelectScreen;

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
    profileImageContainer: {
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
    searchLocationContainer: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: Dimensions.get("window").width * 0.9,
        justifyContent: "space-between",
        elevation: 3,
        backgroundColor: "white",
        borderRadius: 20,
    },
    searchLocationMain: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    noLocationFound: {
        marginVertical: 10,
        paddingVertical: 10,
        fontFamily: "open-sans",
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
