import React from "react";
import {StyleSheet, Text, View} from "react-native";


export const Director = ({id, name}) => {
    return (
        <View style={styles.directorStyle}>

            <Text style={styles.id}>{id}</Text>
            <Text style={styles.name}>{name}</Text>
        </View>
    );


};

const styles = StyleSheet.create({
    directorStyle: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,

    },

    id: {
        marginRight: 20,
        fontSize: 25,
    },
    name: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },

});