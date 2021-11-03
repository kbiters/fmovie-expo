import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export const MovieDetailed = ({navigation, route}) => {

    const props = route.params
    let adult = "";

    if(props.adult === true){
        adult = "YES"
    }else{
        adult = "NO"
    }

    return (
        <View style={styles.moviesStyle}>
            <Image
                style={styles.images}
                source={props.image}
            />

            <Text style={styles.othersElements}>Movie Number: {props.id}</Text>
            <Text style={styles.title}>Title: {props.title}</Text>
            <Text style={styles.othersElements}>Overview: {props.overview}</Text>
            <Text style={styles.othersElements}>rate: {props.rate}</Text>
            <Text style={styles.othersElements}>trailer: {props.trailer}</Text>
            <Text style={styles.othersElements}>language: {props.language}</Text>
            <Text style={styles.othersElements}>duration: {props.duration} min.</Text>
            <Text style={styles.othersElements}>releaseDate: {props.releaseDate}</Text>
            <Text style={styles.othersElements}>adult: {adult}</Text>
            <Text style={styles.othersElements}>genre: {props.genre}</Text>
        </View>

    );

};

const styles = StyleSheet.create({
    moviesStyle: {
        flex:1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    title:{
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },

    othersElements:{
        padding: 10,
        marginRight: 20,
        fontSize: 25,

    },

    images:{
        marginTop:100,
        width: 400,
        height: 400,
        resizeMode: "contain",
    },

});