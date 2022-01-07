import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { FontAwesome } from "@expo/vector-icons"
import { LocationList } from '../../components/LocationList'
import { MaterialIcons } from '@expo/vector-icons'; 
import MenuButton from '../../components/MenuButton'

const data = [
    {
        id:1,
        name: "mantri square",
        location: "Malleswaram, Bangalore.",
        longitude:  77.57120408388653,
        latitude: 12.991781776826029,
    },
    {
        id:2,
        name: "orion mall.",
        location: "Rajajinagar, Bangalore.",
        longitude:  77.55512877009176,
        latitude: 13.011235898411575,
    },
    {
        id:3,
        name: "church street social",
        location: "Church Street, Bangalore.",
        longitude:  77.60274547009152,
        latitude: 12.975854133519901, 

    },
    {
        id:4,
        name: "ulsoor lake",
        location: "Halasuru, Bangalore.",
        longitude:  77.61989969544622,
        latitude: 12.983675943448276, 
    },
    {
        id:5,
        name: "truffles",
        location: "Koromangala, Bangalore.",
        longitude:  77.61429533940269,
        latitude: 12.93367768393524,
    },
    {
        id:6,
        name: "lalit ashok",
        location: "Kumara Krupa Road, Bangalore.",
        longitude:  77.58212704866527,
        latitude: 12.992048070199713,
    },
]


const LocationSelectMapScreen = (props) => {
    const goToLocationMap = ()=>{
        props.navigation.navigate("ParkingSelect");
    }
    const selectedId = props.navigation.getParam("selectedLocation");
    const selectedIndex = data.findIndex((item)=>item.id===selectedId);
    console.log("The selected index is: ", selectedIndex);
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0121,
    })

    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        console.log(location.coords)
        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0121,
        })    
      };

    useEffect(() => {
        getCurrentLocation();
    }, [])
    useEffect(()=>{
        console.log(region);
    },[region]);

    //12.991781776826029, 77.57120408388653 

    return (
        <SafeAreaView style={styles.screen}>
            <MapView 
                style={styles.map}
                region={
                    region
                }
                showsUserLocation={true} 
                >
                    <Marker
                        coordinate={{longitude: region.longitude, latitude: region.latitude}}
                        pinColor={"black"}
                        title={"Mantri Sq."}
                        description={"Mantri Sq."}
                    />
                </MapView>
            {/* <View>
                <Text>Hi there this is the text input</Text>
            </View> */}
            {/* <TouchableOpacity style={styles.menuOptions} onPress={()=>props.navigation.openDrawer()}>
                <MaterialIcons name="menu" size={28} color="white" />
            </TouchableOpacity> */}
            <MenuButton {...props}/>
            <TouchableOpacity activeOpacity={0.6} style={styles.userlocation} onPress={async () => await getCurrentLocation()}>
                <FontAwesome name="location-arrow" size={30} color="white" />
            </TouchableOpacity>
            <LocationList goToLocationMap={goToLocationMap} setRegion={setRegion} startIndex={selectedIndex} navigation={props.navigation}/>

        </SafeAreaView>
    )
}

export default LocationSelectMapScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        marginTop: 20,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    userlocation: { 
        justifyContent: 'center',
        left: Dimensions.get('window').width/2 - 35,
        top: Dimensions.get('window').height/2 + 50,
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 10,
        backgroundColor: 'black',
    },
    menuOptions:{
        position: "absolute",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius:20,
        alignSelf: "flex-start",
        margin: 20,
    }
})

