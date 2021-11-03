import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {MovieDetailed} from "./MovieDetailed";

import axios from 'axios';


export const Movie = ({ navigation, props }) => {
    return (
        <View style={styles.moviesStyle}>

            <Text style={styles.id}>{props.id}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.genre}>{props.genre}</Text>
            <Text style={styles.genre}>{props.duration} min.</Text>
            <Text style={styles.genre}>{props.language}</Text>
            <Text style={styles.rate}>{props.rate}</Text>
            <Text style={styles.rate}>{props.actors}</Text>

            <View style={styles.button}>
                <Button
                    title="View"
                    onPress={ () => {
                        console.log(props);
                        navigation.navigate('MovieDetailed', props)
                    }}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Delete"
                    onPress={ () => {
                        axios.delete(`http://192.168.1.95:8080/movies/${props.id}`)
                    }}
                />
            </View>
        </View>
    );


};

const styles = StyleSheet.create({
    moviesStyle: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,

    },

    id: {
        marginRight: 20,
        fontSize: 25,
    },
    title: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },
    genre: {
        marginRight: 20,
        fontSize: 25,
    },
    duration: {
        marginRight: 20,
        fontSize: 25,
    },
    language: {
        marginRight: 20,
        fontSize: 25,
    },
    rate: {
        marginRight: 20,
        fontSize: 25,
    },

    button: {
      marginRight: 10,
    },
});