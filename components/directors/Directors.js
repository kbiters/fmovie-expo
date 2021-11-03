import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Director} from "./Director";

export const Directors = ({ navigation }) => {
    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        fetchDirectors();
    }, [fetchDirectors]);

    const fetchDirectors = async () => {
        const url = "http://192.168.1.95:8080/directors";
        const resp = await fetch(url);
        const allDirectors = await resp.json();

        const listOfDirectors = allDirectors.map((director) => {
            return {
                directorID: director.directorID,
                name: director.name,
                lastName: director.lastName,
            };

        });
        setDirectors(listOfDirectors);
    }

    return (
        <View style={styles.container}>
            <View style={styles.btnRegister}>
                <Button
                    title="Register Director"
                    onPress={() => navigation.navigate('RegisterDirector')}
                />
            </View>
            <View style={styles.DirectorsStyle}>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>NAME</Text>
                <Text style={styles.title}>LAST-NAME</Text>
            </View>
            <View>
                {directors.map((director) => (
                    <Director key={director.directorID}
                              props={director}
                    />
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        paddingBottom: 25,
        paddingHorizontal: 25,
        opacity:0.5,

    },

    btnRegister:{
        paddingBottom: 50,
    },

    DirectorsStyle: {
        flexDirection: "row",
    },

    title: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },




});