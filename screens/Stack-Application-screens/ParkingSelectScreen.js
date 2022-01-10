import React, { useEffect, useState } from 'react'
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
import DateTimePicker from '@react-native-community/datetimepicker';

const ParkingSelectScreen = (props) => {
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
            updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_LOCATION, resp.data._id);
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
    const [parkingSpotSelected, setParkingSpotSelected] = useState(null);
    
    
    const [showStartTimeSelector, setShowStartTimeSelector] = useState(false);
    const [showEndTimeSelector, setShowEndTimeSelector] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));
    const bookingDetails = useSelector((state)=>state.bookingDetails);
    let startTime = "";
    let endTime = "";
    const timeChangeHandlerStart = (value)=>{
        const date = new Date(value.nativeEvent.timestamp);
        startTime = date.getHours() + ":" + date.getMinutes();
        setShowStartTimeSelector(false);
        updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_TIME,[startTime,bookingDetails.time[1]]);
    }
    const timeChangeHandlerEnd = (value)=>{
        const date = new Date(value.nativeEvent.timestamp);
        endTime = date.getHours() + ":" + date.getMinutes();
        if(date.getHours()>= startTime.split(":")[0]){
            if(date.getHours()> startTime.split(":")[0]){
                setShowEndTimeSelector(false);
                updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_TIME,[bookingDetails.time[0], endTime]);
            }else{
                if(date.getMinutes()>startTime.split(":")[1]){
                    setShowEndTimeSelector(false);
                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_TIME,[bookingDetails.time[0], endTime]);
                }
            }
        }
    }
    useEffect(()=>{
        return ()=>{
            setDataLoaded(false);
        }
    },[])
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
                    <TouchableOpacity style={styles.timeSelectContainer} onPress={()=>setShowStartTimeSelector(true)}>
                        <Text style={styles.timeSelectText}>Start Time  {bookingDetails.time[0]}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.timeSelectContainer} onPress={()=>setShowEndTimeSelector(true)}>
                        <Text style={styles.timeSelectText}>End Time  {bookingDetails.time[1]}</Text>
                    </TouchableOpacity>
                    <View>
                        {
                            showStartTimeSelector &&
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={"time"}
                                is24Hour={false}
                                display="default"
                                onChange={timeChangeHandlerStart}
                                minuteInterval={15}
                                locale="en_IN"
                            />
                        }
                    </View>
                    <View>
                    {
                            showEndTimeSelector &&
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={"time"}
                                is24Hour={false}
                                display="default"
                                onChange={timeChangeHandlerEnd}
                                minuteInterval={15}
                                locale="en_IN"
                            />
                        }
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
                                    parkingLotInfo.parkingSpots.slice(0,6).map((item, index)=>{
                                        return (
                                            <View style={styles.parkingCellContainer} key={index}>
                                                <TouchableOpacity 
                                                    style={
                                                        (parkingSpotSelected===item.name)?
                                                        {
                                                            ...styles.parkingCell,
                                                            backgroundColor: "black",
                                                        }:
                                                        {...styles.parkingCell, ...styles.parkingCellAvailable,}
                                                    }
                                                    onPress={()=>{
                                                        console.log(item);
                                                        if(parkingSpotSelected!==item.name && !item.occupied){
                                                            setSelectedId(index);
                                                            updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_PARKINGLOCATION, item._id);
                                                            setParkingSpotSelected(item.name);
                                                        }
                                                    }}
                                                >
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View style={styles.parkingBottomContainer}>
                            {
                                    parkingLotInfo.parkingSpots.slice(6).map((item, index)=>{
                                        return (
                                            <View style={styles.parkingCellContainer} key={index}>
                                                <TouchableOpacity 
                                                    style={
                                                        (parkingSpotSelected===item.name)?
                                                        {
                                                            ...styles.parkingCell,
                                                            backgroundColor: "black",
                                                        }:
                                                        {...styles.parkingCell, ...styles.parkingCellAvailable,}
                                                    }
                                                    onPress={()=>{
                                                        console.log(item);
                                                        if(parkingSpotSelected!==item.name && !item.occupied){
                                                            setSelectedId(index);
                                                            updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_PARKINGLOCATION, item._id);
                                                            setParkingSpotSelected(item.name);
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
                    <Text style={styles.parkingSpotSelectedText}>
                        The parking spot selected is: {parkingSpotSelected}
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonBack} onPress={()=>{
                    props.navigation.pop()
                    updateBookingDetails("clear", []);
                    }}>
                    <Entypo name="cross" size={24} color="black" />
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.buttonBack, ...styles.buttonConfirm}} onPress={()=>{
                        if(parkingSpotSelected !== null){
                                props.navigation.navigate("ServiceSelect",{
                                    parkingSpotSelected: parkingSpotSelected,
                            })
                        }
                    }   
                }>
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
        // height: 300,
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
        flexWrap: "wrap",
        marginBottom: 50,
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
    parkingSpotSelectedText:{
        fontFamily: "open-sans-bold",
        fontSize: 15,
        padding: 10,
    }

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