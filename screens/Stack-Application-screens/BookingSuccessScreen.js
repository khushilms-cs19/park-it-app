import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
const BookingSuccessScreen = (props) => {
    return (
        // <View style={styles.screen}>
        //     <Text>This is the booking success screen.</Text>
        //     <Button title="Home" onPress={()=>props.navigation.popToTop()}/>
        // </View>
        <View style={styles.screen}>
            <View style={styles.centerBox}>
                <FontAwesome name="check-circle" size={150} color="black" />
                <Text style={styles.successText}>Success!</Text>
                <TouchableOpacity style={styles.homeButtonContainer} onPress={()=>props.navigation.popToTop()}>
                    <Text style={styles.homeText}>Home</Text>
                    <Entypo name="home" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BookingSuccessScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    centerBox:{
        backgroundColor: "white",
        padding: 20,
        paddingHorizontal: 30,
        borderRadius: 20,
        // width: Dimensions.get("window").width*0.6,
        // height: Dimensions.get("window").width*0.7,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
    },
    successText: {
        fontFamily: "open-sans-bold",
        fontSize: 25,
    },
    homeButtonContainer: {
        flexDirection: "row",
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "black",
        margin: 20,
    },
    homeText: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        marginHorizontal: 10,
    }
})

