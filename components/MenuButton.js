import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

const MenuButton = (props) => {
    return (
        <TouchableOpacity style={styles.menuOptions} onPress={() => props.navigation.openDrawer()}>
            <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
    )
}

export default MenuButton;

const styles = StyleSheet.create({
    menuOptions: {
        position: "absolute",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        width: 40,
        height: 40,
        borderRadius: 20,
        alignSelf: "flex-start",
        marginHorizontal: 20,
        marginVertical: 40,
        zIndex: 99,
    }
})
