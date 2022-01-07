import React from "react";
import { Dimensions, StyleSheet, FlatList, View } from "react-native";
import { Rectangle } from "./Rectangle";

export const LocationList = (props) => {
    
    const data = [
        {
            name: "mantri square",
            location: "Malleswaram, Bangalore.",
            longitude:  77.57120408388653,
            latitude: 12.991781776826029,
        },
        {
            name: "orion mall.",
            location: "Rajajinagar, Bangalore.",
            longitude:  77.55512877009176,
            latitude: 13.011235898411575,
        },
        {
            name: "church street social",
            location: "Church Street, Bangalore.",
            longitude:  77.60274547009152,
            latitude: 12.975854133519901, 
    
        },
        {
            name: "ulsoor lake",
            location: "Halasuru, Bangalore.",
            longitude:  77.61989969544622,
            latitude: 12.983675943448276, 
        },
        {
            name: "truffles",
            location: "Koromangala, Bangalore.",
            longitude:  77.61429533940269,
            latitude: 12.93367768393524,
        },
        {
            name: "lalit ashok",
            location: "Kumara Krupa Road, Bangalore.",
            longitude:  77.58212704866527,
            latitude: 12.992048070199713,
        },
    ]

    const onViewRef = React.useRef((viewableItems)=> {
        console.log("This is viewable coords: ",viewableItems.viewableItems[0]);
        
        if(typeof viewableItems.viewableItems[0] === "undefined"){
            console.log("false value");
        }else{
            const coords = viewableItems.viewableItems[0].item;
            props.setRegion((prevState)=>{
                return {
                    ...prevState,
                    longitude: coords.longitude,
                    latitude: coords.latitude,
                }
            })

        }
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
                            <Rectangle title={item.name} status={true} goToLocationMap={props.goToLocationMap} navigation={props.navigation}/>
                        )
                    }}
                    horizontal
                    initialScrollIndex={props.startIndex}
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