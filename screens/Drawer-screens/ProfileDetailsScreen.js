import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProfileDetailsScreen = () => {
    return (
        <View  style={styles.screen}>
            <Text>This is the profile details page.</Text>
        </View>
    )
}

export default ProfileDetailsScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
