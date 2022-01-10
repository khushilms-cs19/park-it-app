import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native'
import RNDateTimeSelector from 'react-native-date-time-scroll-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import axios from 'axios';
import { useSelector } from 'react-redux';
import updateParkinglotDetails from '../../redux/actions/parkinglotDetailsActions';
import { parkinglotDetailsConstants } from '../../redux/actionTypes/parkinglotDetailsConstants';
import AppLoading from 'expo-app-loading';
import updateBookingDetails from '../../redux/actions/bookingDetailsActions';
import { bookingDetailsConstants } from '../../redux/actionTypes/bookingDetailsConstants';


const ParkingSelectScreen = (props) => {

    const [parkingLotData, setParkingLotData] = useState(
        [
            {
                status: "available",
                name: "a1",
            },
            {
                status: "available",
                name: "a2",
            },
            {
                status: "available",
                name: "a3",
            },
            {
                status: "available",
                name: "a4",
            },
            {
                status: "available",
                name: "a5",
            },
            {
                status: "available",
                name: "a6",
            },
            {
                status: "available",
                name: "a7",
            },
            {
                status: "available",
                name: "a8",
            },
            {
                status: "available",
                name: "a9",
            },
        ]
    );
    const baseUrl = "https://park-it-proj.herokuapp.com/";
    const token = useSelector((state)=>state.userData.token);
    const fetchParkingLotDetails = async()=>{
        const selectedLocationName = props.navigation.getParam("selectedLocationName");
        await axios.post(`${baseUrl}location/details`,
        {
            name: selectedLocationName,
        },{
            headers: {
                Authorization: "Bearer "+token,
            }
        }).then((resp)=>{
            updateParkinglotDetails(parkinglotDetailsConstants.PARKING_LOT_UPDATE_COMPLETE, resp.data);
        }).catch((err)=>{
            console.log("there was some error with location details: ",err);
        })
    }
    const selectedLocationName = props.navigation.getParam("selectedLocationName");
    console.log(selectedLocationName);
    const parkingLotInfo = useSelector((state)=>state.parkinglotDetails);
    console.log("parking lot info state : ", parkingLotInfo);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    if(!dataLoaded){
        return <AppLoading startAsync={fetchParkingLotDetails} onFinish={()=>setDataLoaded(true) } onError={(err)=>console.log(err)}/>
    }
    return (
        // <View style={styles.screen}>
        //     <Text>This is the parking select screen.</Text>
        //     <Button title="Next" onPress={()=>props.navigation.navigate("ServiceSelect")}/>
        // </View>
        <View style={styles.screen}>
            <ScrollView>

                <View>
                    <View style={styles.timeSelectContainer}>
                        <Text style={styles.timeSelectText}>Start Time  7 : 15</Text>
                    </View>
                    <View style={styles.timeSelectContainer}>
                        <Text style={styles.timeSelectText}>End Time  7 : 45</Text>
                    </View>
                    <View>
                        <View style={styles.parkingContainer}>
                            {/* <View style={styles.parkingTopContainer}>
                            {
                                parkingLotData.map((location, index, data)=>{
                                    if(index === data.length - 1){
                                        return (
                                            <View style={styles.parkingCellContainerLast} key={index}>
                                                <TouchableOpacity style={{...styles.parkingCell, ...styles.parkingCellAvailable}}></TouchableOpacity>
                                            </View>
                                        )
                                    }
                                    return (
                                        <View style={styles.parkingCellContainer} key={index}>
                                            <TouchableOpacity style={{...styles.parkingCell, ...styles.parkingCellAvailable}}></TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                            </View> */}
                            {/* <View style={styles.parkingBottomContainer}>
                            {
                                parkingLotData.map((location, index, data)=>{
                                    if(index === data.length - 1){
                                        return (
                                            <View style={styles.parkingCellContainerLast} key={index}>
                                                <TouchableOpacity style={{...styles.parkingCell, ...styles.parkingCellAvailable}}></TouchableOpacity>
                                            </View>
                                        )
                                    }
                                    return (
                                        <View style={styles.parkingCellContainer} key={index}>
                                            <TouchableOpacity style={{...styles.parkingCell, ...styles.parkingCellAvailable}}></TouchableOpacity>
                                        </View>
                                    )
                                })
                            }
                            </View> */}
                            <View style={styles.parkingTopContainer}>
                                {
                                    parkingLotInfo.parkingSpots.map((item, index)=>{
                                        return (
                                            <View style={styles.parkingCellContainer} key={index}>
                                                <TouchableOpacity 
                                                    style={
                                                        (selectedId===index)?
                                                        {
                                                            ...styles.parkingCell,
                                                            backgroundColor: "black",
                                                        }:
                                                        {...styles.parkingCell, ...styles.parkingCellAvailable,}
                                                    }
                                                    onPress={()=>{
                                                        console.log(item);
                                                        if(selectedId!==index && !item.occupied){
                                                            setSelectedId(index);
                                                            updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_PARKINGLOCATION, item._id);
                                                        }
                                                    }}
                                                >
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonBack} onPress={()=>props.navigation.pop()}>
                    <Entypo name="cross" size={24} color="black" />
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.buttonBack, ...styles.buttonConfirm}} onPress={()=>props.navigation.navigate("ServiceSelect")}>
                    <Text style={styles.confirmText}>Confirm</Text>
                    <Ionicons name="ios-chevron-forward-circle-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ParkingSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
    },  
    timeSelectContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginVertical: 10,
        borderRadius: 20,
    },
    timeSelectText:{
        fontFamily: "open-sans-bold",
        fontSize: 22,
    },
    parkingContainer: {
        width: Dimensions.get("window").width*0.9,
        height: 300,
        backgroundColor: "white",
        elevation: 2,
        padding: 20,
        borderRadius: 15,
        justifyContent: "space-between",
    },
    parkingTopContainer: {
        flexDirection: "row",
        justifyContent: "center",
        borderBottomColor: "black",
        borderBottomWidth: 2,
    },  
    parkingBottomContainer: {
        flexDirection: "row",
        justifyContent: "center",
        borderTopColor: "black",
        borderTopWidth: 2,
    },  
    parkingCellContainer: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },  
    parkingCellContainerLast: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },  
    parkingCell: {
        width: Dimensions.get("window").width*0.06,
        height: Dimensions.get("window").height*0.08,
        borderRadius: 5,
        margin: Dimensions.get("window").width*0.05*0.3,
    },
    parkingCellAvailable: {
        backgroundColor: "#93D36B",
    },
    parkingCellUnavailable: {
        backgroundColor: "#ccc",
    },
    buttonContainer: {
        width: Dimensions.get("window").width,
        flexDirection: "row",
        backgroundColor: "black",
        height: "10%",
        justifyContent: "space-around",
        alignItems: "center",
    }, 
    buttonBack: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: Dimensions.get("window").width*0.4,
        height: 50,
        borderRadius: 15,
    },
    buttonConfirm:{
        backgroundColor: "black",
        borderWidth: 2,
        borderColor: "white"
    },
    confirmText: {
        color: "white",
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
    cancelText: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },

})


/*
//extra parking css
parkingCellContainer: {
        borderRightWidth: 2,
        borderColor: "black",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },  
    parkingCellContainerLast: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },  
    parkingCell: {
        width: Dimensions.get("window").width*0.06,
        height: Dimensions.get("window").height*0.08,
        borderRadius: 5,
        margin: Dimensions.get("window").width*0.05*0.3,
    },
    parkingCellAvailable: {
        backgroundColor: "#93D36B",
    },
    parkingCellUnavailable: {
        backgroundColor: "#ccc",
    },
*/ 