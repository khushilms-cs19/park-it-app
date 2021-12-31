import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import { FontAwesome } from "@expo/vector-icons"
import { LocationList } from '../../components/LocationList'
import { MaterialIcons } from '@expo/vector-icons'; 
import MenuButton from '../../components/MenuButton'



const LocationSelectMapScreen = (props) => {
    const goToLocationMap = ()=>{
        props.navigation.navigate("ParkingSelect");
    }

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
        console.log(location)
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
    

    return (
        <SafeAreaView style={styles.screen}>
            <MapView 
                style={styles.map}
                region={
                    region
                }
                showsUserLocation={true} 
                />
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
            <LocationList goToLocationMap={goToLocationMap}/>

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

