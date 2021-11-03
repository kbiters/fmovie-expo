import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import axios from "axios";



export const Actor = ({props}) => {
    return (
        <View style={styles.actorStyle}>

            <Text style={styles.id}>{props.actorID}</Text>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.name}>{props.lastName}</Text>
            <Button
                title="Delete"
                onPress={ () => {
                    axios.delete(`http://192.168.1.95:8080/actors/${props.actorID}`)
                }}
            />
        </View>

    );


};

const styles = StyleSheet.create({
    actorStyle: {
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