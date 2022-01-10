import React, { useState } from 'react'
import { Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
const ParkingHistoryItem = (props) => {
    const {time,services,parkingLocation,amount,status,name} = props.data;
    const {setModalVisibleOverlay } = props;
    const [modalVisible, setModalVisible] = useState(false);
    // const name="khushil";
    return (
        <View>

            <Modal
                animationType='slide'
                transparent= {true}
                visible={modalVisible}
            >
                <View style={styles.modalMain}>
                    <View style={styles.modalContainer}>
                        <View style={styles.cancelContainer}>
                            <Text style={styles.locationName}>{name[0].toUpperCase()+name.slice(1)}</Text>
                            <MaterialIcons name="cancel" size={30} color="black" onPress={()=>{
                                setModalVisible(false)
                                setModalVisibleOverlay(false)
                            }
                            }/>
                        </View>
                        <Text style={styles.locationArea}>{parkingLocation.name}</Text>
                        <View style={styles.timeContainer}>
                            <Text style={styles.startTimeModal}>Start Time:</Text>
                            <Text style={styles.startTimeModal}>{time[0].start}</Text>
                        </View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.startTimeModal}>End Time:</Text>
                            <Text style={styles.startTimeModal}>{time[0].start}</Text>
                        </View>
                        <Text style={styles.spotNumber}>{parkingLocation.name}</Text>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.parkingContainer} onPress={()=>{   
                setModalVisible(true)
                setModalVisibleOverlay(true);
            }}>
                <View>
                    <Text style={styles.locationName}>{name[0].toUpperCase()+name.slice(1)}</Text>
                    <Text style={styles.locationArea}>{name}</Text>
                </View>
                <View>
                    <Text style={styles.spotNumber}>{parkingLocation.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ParkingHistoryItem;

const styles = StyleSheet.create({
    parkingContainer:{
        backgroundColor: "#ccc",
        padding: 20,
        margin: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: Dimensions.get("window").width*0.8,
        elevation: 5,
    },
    locationName: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
    locationArea: {
        fontFamily: "open-sans",
    },
    spotNumber: {
        fontFamily: "open-sans-bold",
        fontSize: 25,
        padding: 5,
        textAlign: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: "white",
        marginVertical: 10,
    },
    modalMain:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: Dimensions.get("window").width*0.8,
    },
    cancelContainer:{
        alignItems:"center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    startTimeModal:{
        fontFamily: "open-sans-bold",
        fontSize: 25,
    },
    timeContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalOverlay: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "black",
        position: 'absolute',
    }
})
