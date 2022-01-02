import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Dimensions, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import MenuButton from '../../components/MenuButton';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
const CustomerSupportScreen = (props) => {
    const goToCallApp = ()=>{
        Linking.openURL("tel:+919036206110");
    }
    const goToGmailApp = ()=>{
        Linking.openURL("mailto:support@parkit.com");
    }
    return (
        <SafeAreaView style={styles.screen}>
            <MenuButton {...props}/>
            <Text style={styles.screenTitle}>
                Customer Support 
            </Text>
            <View style={styles.customerServiceIconContainer}>
                <AntDesign name="customerservice" size={100} color="black" />
            </View>
            <View style={styles.customerSupportContainer}>
                <View style={styles.customerSupportModeContainer}>
                    <Text style={styles.customerSupportMode}>+91-9036206110</Text>
                    <TouchableOpacity style={styles.customerSupportButton} onPress={()=>goToCallApp()}>
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.customerSupportModeContainer}>
                    <Text style={styles.customerSupportMode}>support@parkit.com</Text>
                    <TouchableOpacity style={styles.customerSupportButton} onPress={()=>goToGmailApp()}>
                        <Entypo name="mail" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CustomerSupportScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    screenTitle: {
        fontSize: 20,
        fontFamily: "open-sans-bold",
        color: "white",
        backgroundColor: "black",
        alignItems: "center",
        padding: 10,
        margin: 35,
        borderRadius: 10,
    },
    customerServiceIconContainer: {
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 70,
    },
    customerSupportContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        margin: 20,
        width: Dimensions.get("window").width*0.8,
    },
    customerSupportModeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    customerSupportButton: {
        backgroundColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        elevation: 5,
    },
    customerSupportMode:{
        fontFamily: "open-sans-bold",
        fontSize: 15,
    }
});
