import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Director} from "./Director";

export const Directors = () => {
    const [directors, setDirectors] = useState([]);

    useEffect(() => {
        fetchDirectors();
    }, [fetchDirectors]);

    const fetchDirectors = async () => {
        const url = "http://localhost:8080/directors";
        const resp = await fetch(url);
        const allDirectors = await resp.json();
        const listOfDirectors = allDirectors.map((director) => {
            return {
                id: director.id,
                name: director.name,
            };
        });
        setDirectors(listOfDirectors);
    }

    return (
        <View style={styles.container}>
            <View style={styles.DirectorsStyle}>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>NAME</Text>
            </View>
            <View>
                {directors.map((director) => (
                    <Director key={director.id}
                              id={director.id}
                              name={director.name}
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
    },

    DirectorsStyle: {

        flexDirection: "row",
        marginTop: 50,
    },

    title: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },

});