import React from "react";
import { Dimensions, StyleSheet, View, Text, Button } from "react-native"
import CustomBigButton from "./CustomBigButton";
import {AntDesign} from "@expo/vector-icons";
import updateBookingDetails from "../redux/actions/bookingDetailsActions";
import { bookingDetailsConstants } from "../redux/actionTypes/bookingDetailsConstants";

export const Rectangle = (props) => {

    if (props.title == "filler") {
        return (
            <View style={styles.fillerRectangle}>
            </View>
        )
    }    
    return (
        <View style={styles.rectangle}>
            <Text style={styles.locationName}>{props.title[0].toUpperCase()+props.title.slice(1)}</Text>
            <View>
                <View style={props.status?styles.availableStyle :styles.unavailableStyle}>
                    <Text style={styles.parkingStatusText}>{
                        props.status ?
                        "Parking Available":
                        "Parking Unavailable"
                    }: </Text>
                    <Text style={styles.parkingCount}>
                        {props.parkingAvailableCount? props.parkingAvailableCount: "0"}
                    </Text>
                </View>
                <View style={props.status?styles.availableStyle :styles.unavailableStyle}>
                    <Text style={styles.parkingStatusText}>{
                        props.status ?
                        "Services Available":
                        "Services Unavailable"
                    }</Text>
                    <AntDesign name="checkcircle" size={15} color="black" />
                </View>
            </View>
            <CustomBigButton onPress={()=>{
                    updateBookingDetails(bookingDetailsConstants.BOOKING_DETAILS_LOCATION, props.title);
                    props.navigation.navigate("ParkingSelect");
                }}>
                Select
            </CustomBigButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle: {
        width: Dimensions.get("window").width*0.8,
        height: Dimensions.get("window").height*0.3,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 10
    },
    fillerRectangle: {
        width: Dimensions.get("window").width*0.2,
        height: Dimensions.get("window").height*0.3,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 10,
    },
    locationName:{
        fontFamily: "open-sans-bold",
        fontSize: 20,
        margin: 10,
        textAlign: "left",
        paddingHorizontal: 30,
    },
    parkingStatusText: {
        fontFamily: "open-sans-bold",
        textAlign: "center",
    },
    availableStyle: {
        backgroundColor: "#93D36B",
        paddingVertical: 5,
        margin :5,
        borderRadius: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: 170,
    },
    unavailableStyle: {
        backgroundColor: "#ff2b2b",
        paddingVertical: 5,
        margin :5,
        paddingHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        minWidth: 170,
    },
    parkingCount: {
        fontFamily: "open-sans-bold",
        fontWeight: "600"
    }
})