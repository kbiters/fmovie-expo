import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Actor} from "./Actor";

export const Actors = () => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchActors();
    }, [fetchActors]);

    const fetchActors = async () => {
        const url = "http://localhost:8080/actors";
        const resp = await fetch(url);
        const allActors = await resp.json();
        const listOfActors = allActors.map((actor) => {
            return {
                id: actor.id,
                name: actor.name,
            };
        });
        setActors(listOfActors);
    }

    return (
        <View style={styles.container}>
            <View style={styles.actorStyle}>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>NAME</Text>
            </View>
            <View>
                {actors.map((actor) => (
                    <Actor key={actor.id}
                           id={actor.id}
                           name={actor.name}
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

    actorStyle: {

        flexDirection: "row",
        marginTop: 50,

    },

    title: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },

});