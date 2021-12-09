import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const LocationSearched = (props) => {
    const {name, location} = props;
    return (
        <TouchableOpacity onPress={()=>props.goToLocationMap()}>    
            <View style={styles.locationContainer}>
                <Text style={styles.locationName}>{name[0].toUpperCase()+name.slice(1)}</Text>
                <Text style={styles.locationMap}>{location}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LocationSearched;

const styles = StyleSheet.create({
    locationContainer: {
        width : Dimensions.get("window").width*0.9,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#ccc",

        borderBottomWidth: 1,
        padding: 20,
    },
    locationName: {
        fontFamily: "open-sans",
        fontSize: 20,
        fontWeight: "500",
    },
    locationMap: {
        fontFamily: "open-sans",
        fontSize: 15,
        color: "#aaa",
    }
})
