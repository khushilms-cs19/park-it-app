import React from "react";
import { Dimensions, StyleSheet, FlatList, View } from "react-native";
import { Rectangle } from "./Rectangle";

export const LocationList = (props) => {

    const data = [
        {
            name: "mantri square",
            location: "Malleswaram, Bangalore."
        },
        {
            name: "orion mall.",
            location: "Rajajinagar, Bangalore."
        },
        {
            name: "church street social",
            location: "Church Street, Bangalore."
        },
        {
            name: "ulsoor lake",
            location: "Halasuru, Bangalore."
        },
        {
            name: "truffles",
            location: "Koromangala, Bangalore."
        },
        {
            name: "lalit ashok",
            location: "Kumara Krupa Road, Bangalore."
        },
    ]

    const onViewRef = React.useRef((viewableItems)=> {
        console.log(viewableItems)
        // Use viewable items in state or as intended
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 80 })


    return (
        <View style={styles.screen}>
            <View>
                <FlatList
                    style={styles.list}
                    data={data}
                    keyExtractor={(item) => item.location}
                    renderItem={({ item }) => {
                        return (
                            <Rectangle title={item.name} status={true} goToLocationMap={props.goToLocationMap}/>
                        )
                    }}
                    horizontal
                    snapToInterval={Dimensions.get("window").width-60}
                    onViewableItemsChanged={onViewRef.current}
                    viewabilityConfig={viewConfigRef.current}
                    decelerationRate={'fast'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    list: {
        height: Dimensions.get("window").height * 0.5,
        marginTop: Dimensions.get("window").height * 0.6,
    }
});