import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import { FontAwesome } from "@expo/vector-icons"
import { LocationList } from '../../components/LocationList'




const LocationSelectMapScreen = (props) => {

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
        <View style={styles.screen}>
            <MapView 
                style={styles.map}
                region={
                    region
                }
                showsUserLocation={true} 
            />
            <TouchableOpacity activeOpacity={0.6} style={styles.userlocation} onPress={async () => await getCurrentLocation()}>
                <FontAwesome name="location-arrow" size={30} color="white" />
            </TouchableOpacity>
            <LocationList />
            
        </View>
    )
}

export default LocationSelectMapScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    userlocation: { 
        justifyContent: 'center',
        left: Dimensions.get('window').width/2 - 35,
        top: Dimensions.get('window').height/2 - 35,
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
        margin: 10,
        backgroundColor: 'black',
    }
})

