import axios from 'axios';
import AppLoading from 'expo-app-loading';
import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'
import { useSelector } from 'react-redux';
import MenuButton from '../../components/MenuButton';
import ParkingHistoryItem from '../../components/ParkingHistoryItem';
import AsyncStorage from "@react-native-async-storage/async-storage";
import updateParkingHistory from '../../redux/actions/parkingHistoryActions';
import { parkingHistoryConstants } from '../../redux/actionTypes/parkingHistoryConstants';

const ParkingHistoryScreen = (props) => {
    const [dataLoaded , setDataLoaded ] = useState(false);
    const baseUrl= "https://park-it-proj.herokuapp.com/";
    const fetchTheParkingHistory = async()=>{
        const token = await AsyncStorage.getItem("token");
        await axios.post(`${baseUrl}user/history`,{},{
            headers: {
                Authorization: "Bearer "+token,
            }
        }).then((resp)=>{
            console.log("The result of the parking history: ",resp.data);
            updateParkingHistory(parkingHistoryConstants.PARKING_HISTORY_UPDATE_COMPLETE,resp.data);
        }).catch((err)=>{
            console.log("The error: ",err);
        });
    }


    const parkingHistoryData = useSelector((state)=>state.parkingHistory);
    console.log(parkingHistoryData);
    // const allParkingData = useSelector((state)=>state.allParkinglots);
    // console.log(allParkingData,parkingHistoryData);
    // parkingHistoryData = parkingHistoryData.map((item)=>{
    //     console.log(allParkingData.find((location)=>{
    //         console.log(location._id, item.parkingLocation._id);
    //         return location._id===item.parkingLocation._id
    //     }));
    //     const nameT = allParkingData.find((location)=>location._id===item.parkingLocation._id).name
    //     return {
    //         ...item,
    //         name: nameT,

    //     }
    // })
    useEffect(()=>{
        return ()=>{
            setDataLoaded(false);
        }
    },[]);
    console.log(parkingHistoryData);
    const [modalVisibleOverlay, setModalVisibleOverlay] = useState(false);
    if(!dataLoaded){
        return <AppLoading
            startAsync={fetchTheParkingHistory}
            onFinish={()=>setDataLoaded(true)}
            onError={()=>console.log("There was some error fetching the parking history data")}
        />
    }
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
                    data={parkingHistoryData}
                    renderItem={(item)=>{
                        return <ParkingHistoryItem data={item.item} setModalVisibleOverlay={setModalVisibleOverlay}/>
                    }}
                    keyExtractor={(item, index)=>index}
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
