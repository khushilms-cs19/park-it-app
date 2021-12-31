import React, {useState} from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import MenuButton from '../../components/MenuButton';
import ParkingHistoryItem from '../../components/ParkingHistoryItem';

const ParkingHistoryScreen = (props) => {
    const data = [
        {
            id: 1,
            name: "mantri square",
            location: "Malleswaram, Bangalore",
            spotNumber: 'A2',
            startTime: "7:15",
            endTime: "7:45",
        },
        {
            id: 2,
            name: "orion mall",
            location: "Rajajinagar, Bangalore",
            spotNumber: 'A2',
            startTime: "7:15",
            endTime: "7:45",
        },
        {
            id: 3,
            name: "lalit ashok",
            location: "KK Road, Bangalore",
            spotNumber: 'A2',
            startTime: "7:15",
            endTime: "7:45",
        },
        {
            id: 4,
            name: "truffles",
            location: "St. Marks Road, Bangalore",
            spotNumber: 'A2',
            startTime: "7:15",
            endTime: "7:45",
        },
        {
            id: 5,
            name: "church street social",
            location: "Church Street, Bangalore",
            spotNumber: 'A2',
            startTime: "7:15",
            endTime: "7:45",
        },
    ]
    const [modalVisibleOverlay, setModalVisibleOverlay] = useState(false);
    return (
        <View  style={styles.screen}>
            {
                modalVisibleOverlay && 
                <TouchableOpacity style={styles.modalOverlay}></TouchableOpacity>
            }
            <MenuButton {...props} />
            <Text style={styles.screenTitle}>
                Parking History
            </Text>
            <View>
                <FlatList
                    data={data}
                    renderItem={(item)=>{
                        return <ParkingHistoryItem data={item.item} setModalVisibleOverlay={setModalVisibleOverlay}/>
                    }}
                    keyExtractor={(item)=>item.id}
                />
            </View>
        </View>
    )
}

export default ParkingHistoryScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        alignItems: "center",
        zIndex: 5,
    },
    screenTitle:{
        fontFamily: "open-sans-bold",
        color: "white",
        backgroundColor: "black",
        padding: 10,
        width: "50%",
        textAlign: "center",
        borderRadius: 10,
        fontSize: 16,
    },
    modalOverlay:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        backgroundColor: "black",
        position: 'absolute',
        zIndex: 10,
        opacity: 0.7,
    }
})
