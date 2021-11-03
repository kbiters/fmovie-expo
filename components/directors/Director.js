import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import axios from "axios";


export const Director = ({props}) => {
    return (
        <View style={styles.directorStyle}>
            <Text style={styles.id}>{props.directorID}</Text>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.name}>{props.lastName}</Text>
            <View style={styles.button}>
                <Button
                    title="Delete"
                    onPress={ () => {
                        axios.delete(`http://192.168.1.95:8080/directors/${props.directorID}`)
                    }}
                />
            </View>
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