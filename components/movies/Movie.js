import React from "react";
import {StyleSheet, Text, View} from "react-native";


export const Movie = ({id, title, genre, duration, language, rate, actors}) => {
    return (
        <View style={styles.moviesStyle}>

            <Text style={styles.id}>{id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.genre}>{genre}</Text>
            <Text style={styles.genre}>{duration} min.</Text>
            <Text style={styles.genre}>{language}</Text>
            <Text style={styles.rate}>{rate}</Text>
            <Text style={styles.rate}>{actors}</Text>
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


});