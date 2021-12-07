import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
const MainScreen = (props) => {
    return (
        <View style={styles.screen}>
            {/* <Text>This is the main landing screen.</Text>
            <Button title="book parking space" onPress={() => props.navigation.navigate("LocationSelect")} /> */}
            <View>
                <View>
                    <TouchableOpacity>
                        <Text>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View>
                    <Image source={{uri:"https://indianmemetemplates.com/wp-content/uploads/phir-hera-pheri-akshay-waiting-pose-.jpg"}}/>
                    <Text>Name</Text>
                </View>
            </View>
            <View>
                <Button title="Book a parking space."/>
                <Button title="Book a parking space."/>
                <Button title="Book a parking space."/>
            </View>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})
