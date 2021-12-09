import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
import RNDateTimeSelector from 'react-native-date-time-scroll-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
const dataSet = {
    data: {
      firstColumn: [...Array(6).keys()].map((item, idx)=> {return {value: item, index: idx}}),
      secondColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
      thirdColumn: [...Array(60).keys()].map((item, idx)=> {return {value: item, index: idx}}),
    },
    initials: [1,2,5]  
  }
const parkingLotData = [
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
const ParkingSelectScreen = (props) => {
    return (
        // <View style={styles.screen}>
        //     <Text>This is the parking select screen.</Text>
        //     <Button title="Next" onPress={()=>props.navigation.navigate("ServiceSelect")}/>
        // </View>
        <View style={styles.screen}>
            <View>
                <View>
                    <Text>Start Time  7 : 15</Text>
                </View>
                <View>
                    <Text>End Time  7 : 45</Text>
                </View>
                <View>
                    <View style={styles.parkingContainer}>
                        {
                            parkingLotData.map(()=>{
                                return (
                                    <View style={styles.parkingCellContainer}>
                                        <TouchableOpacity style={{...styles.parkingCell, ...styles.parkingCellAvailable}}></TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
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
    },  
    parkingContainer: {
        width: Dimensions.get("window").width*0.9,
        height: 300,
        backgroundColor: "white",
        elevation: 2,
        padding: 10,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
    },
    parkingCellContainer: {
        borderWidth: 0.5,
        borderColor: "black",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },  
    parkingCell: {
        width: 30,
        height: 60,
        borderRadius: 5,
        margin: 5,
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

    }
})

