import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import updateBookingDetails from '../../redux/actions/bookingDetailsActions';
import { bookingDetailsConstants } from '../../redux/actionTypes/bookingDetailsConstants';
import { useSelector } from 'react-redux';
import axios from 'axios';
const ServiceSelectScreen = (props) => {
    const [carServicesSelected, setCarServicesSelected] = useState(false);
    const [oilChangeSelected, setOilChangeSelected] = useState(false);
    const [cleaningSelected, setCleaningSelected] = useState(false);
    const normalStyle = {...styles.serviceContainer};
    const selectedStyle = {...styles.serviceContainer,...styles.serviceSelectedContainer};
    const bookingDetails = useSelector((state)=>state.bookingDetails);
    console.log(bookingDetails);
    let additionalChanges = 0;
    if(carServicesSelected){
        additionalChanges+=100;
    }
    if(oilChangeSelected){
        additionalChanges+=80;
    }
    if(cleaningSelected){
        additionalChanges+=150;
    }
    let totalBillAmount = additionalChanges+10.50+5;
    const token = useSelector((state)=>state.userData.token);
    const makeTheBooking = async()=>{
        const baseUrl= "https://park-it-proj.herokuapp.com/";
        try{
            await axios.post(`${baseUrl}booking/new`,bookingDetails,
            {
                headers:{
                    Authorization: "Bearer "+token,
                }
            }
            ).then((resp)=>{
                console.log("The booking response: ", resp);
            })
        }catch(err){
            console.log("There was some error",err);
        }
    }

    return (
        // <View style={styles.screen}>
        //     <Text>This is the service select screen.</Text>
        //     <Button title="Confirm" onPress={()=>props.navigation.navigate("BookingSuccess")}/>
        // </View>
        
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.bookingDetails}>
                    <Text style={styles.bookingDetailsTitle}>Booking Details</Text>
                    <View style={styles.bookingTimeContainer}>
                        <View style={styles.cellNumberContainer}>
                            <Text style={styles.cellNumberText}>C2</Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timeText}>7 : 15 PM</Text>
                            <Text style={styles.timeText}>to</Text>
                            <Text style={styles.timeText}>7 : 45 PM</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.addServicesContainer}>
                    <View style={styles.serviceTitleContainer}>
                        <Text style={styles.serviceTitleText}>Add Services</Text>
                        <AntDesign name="downcircleo" size={24} color="white" />
                    </View>
                    <View style={styles.servicesList}>
                        <TouchableOpacity 
                            style={carServicesSelected?selectedStyle:normalStyle}
                            onPress={()=>{
                                if(carServicesSelected){
                                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_SERVICES, bookingDetails.services.filter((item)=>item!=="61d9b03fc1b14e8979480dc9"));
                                }else{
                                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_SERVICES,[
                                        ...bookingDetails.services,
                                        "61d9b03fc1b14e8979480dc9"
                                    ]);
                                }
                                setCarServicesSelected(!carServicesSelected);
                            }}
                        >
                            <Text style={styles.serviceName}>Car Wash</Text>
                            {
                                carServicesSelected ?
                                <FontAwesome name="check-circle" size={24} color="black" />:
                                <MaterialIcons name="cleaning-services" size={24} color="black" />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={oilChangeSelected?selectedStyle:normalStyle}
                            onPress={()=>{
                                if(oilChangeSelected){
                                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_SERVICES, bookingDetails.services.filter((item)=>item!=="61d9b03fc1b14e8979480dca"));
                                }else{
                                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_SERVICES,[
                                        ...bookingDetails.services,
                                        "61d9b03fc1b14e8979480dca"
                                    ]);
                                }
                                setOilChangeSelected(!oilChangeSelected);

                            }}
                        >
                            <Text style={styles.serviceName}>Tire Change</Text>
                            {
                                oilChangeSelected?
                                <FontAwesome name="check-circle" size={24} color="black" />:
                                <MaterialIcons name="car-repair" size={24} color="black" />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={cleaningSelected?selectedStyle:normalStyle}
                            onPress={()=>{
                                if(cleaningSelected){
                                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_SERVICES, bookingDetails.services.filter((item)=>item!=="61d9b03fc1b14e8979480dcb"));
                                }else{
                                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_SERVICES,[
                                        ...bookingDetails.services,
                                        "61d9b03fc1b14e8979480dcb"
                                    ]);
                                }
                                setCleaningSelected(!cleaningSelected);
                            }}
                        >
                            <Text style={styles.serviceName}>Oil Change</Text>
                            {
                                cleaningSelected?
                                <FontAwesome name="check-circle" size={24} color="black" />:
                                <FontAwesome5 name="oil-can" size={24} color="black" />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.billDetailsContainer}>
                    <Text style={styles.billDetailsTitle}>
                        Bill Details
                    </Text>
                    <View style={styles.billBreakdownContainer}>
                        <View style={styles.billEntry}>
                            <Text style={styles.billEntryText}>Parking Free</Text>
                            <Text style={styles.billEntryText}>10.50</Text>
                        </View>
                        <View style={styles.billEntry}>
                            <Text style={styles.billEntryText}>Additional Services</Text>
                            <Text style={styles.billEntryText}>{additionalChanges}.00</Text>
                        </View>
                        <View style={styles.billEntry}>
                            <Text style={styles.billEntryText}>Booking Charges</Text>
                            <Text style={styles.billEntryText}>5.00</Text>
                        </View>
                    </View>
                    <Text style={styles.totalBillText}>Total: {totalBillAmount.toFixed(2)}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonBack} onPress={() => props.navigation.pop()}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                    <Text style={styles.cancelText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.buttonBack, ...styles.buttonConfirm }} onPress={async()=>{
                        updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_AMOUNT, totalBillAmount);
                        try{
                            await makeTheBooking();
                            props.navigation.navigate("BookingSuccess");
                        }catch{
                            console.log("There was some error in booking");
                        }
                    }}>
                    <Text style={styles.confirmText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ServiceSelectScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    },
    bookingDetails: {
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        width: Dimensions.get("window").width * 0.8,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    bookingDetailsTitle: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
    },
    bookingTimeContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: 20,
    },
    cellNumberContainer: {
        borderRadius: 10,
        width: "30%",
        height: 70,
        elevation: 5,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    cellNumberText: {
        fontFamily: "open-sans-bold",
        fontSize: 30,
    },
    timeContainer: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        width: "40%",
        height: 70,
    },
    timeText: {
        fontFamily: "open-sans-bold",
    },
    addServicesContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
        width: Dimensions.get("window").width * 0.8,
        justifyContent: "center",
        alignItems: "center",
    },
    serviceTitleContainer: {
        backgroundColor: "black",
        width: "100%",
        height: 50,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    serviceTitleText: {
        color: "white",
        fontFamily: "open-sans-bold",
        fontSize: 20,
    },
    servicesList: {
        width: "100%",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        elevation: 5,
    },
    serviceContainer: {
        backgroundColor: "#ccc",
        margin: 5,
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    serviceSelectedContainer:{
        borderWidth: 4,
        borderColor: "black",
    },
    serviceName: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
    billDetailsContainer: {
        width: Dimensions.get("window").width * 0.8,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    billDetailsTitle: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
        marginHorizontal: 10,
    },
    billBreakdownContainer: {
        padding: 10,
        borderTopColor: "black",
        borderTopWidth: 1,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    billEntry: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 2,
    },
    billEntryText: {
        fontFamily: "open-sans-bold",
        color: "#777"
    },
    totalBillText: {
        fontFamily: "open-sans-bold",
        textAlign: "right",
        fontSize: 15,
        marginHorizontal: 10,
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
        width: Dimensions.get("window").width * 0.4,
        height: 50,
        borderRadius: 15,
    },
    buttonConfirm: {
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

