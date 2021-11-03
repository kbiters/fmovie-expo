import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Actor} from "./Actor";


export const Actors = ({ navigation }) => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetchActors();
    }, [fetchActors]);

    const fetchActors = async () => {
        const url = "http://192.168.1.95:8080/actors";
        const resp = await fetch(url);
        const allActors = await resp.json();
        const listOfActors = allActors.map((actor) => {
            return {
                actorID: actor.actorID,
                name: actor.name,
                lastName: actor.lastName,
            };
        });
        setActors(listOfActors);
    }

    return (

        <View style={styles.container}>
            <View style={styles.btnActor}>
                <Button
                    title="Register Actor"
                    onPress={() => navigation.navigate('RegisterActor')}
                />
            </View>
            <View style={styles.actorStyle}>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>NAME</Text>
                <Text style={styles.title}>LAST-NAME</Text>
            </View>
            <View>
                {actors.map((actor) => (
                    <Actor key={actor.actorID}
                           props={actor}
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

    actorStyle: {

        flexDirection: "row",
        marginTop: 50,
    },

    btnActor:{
        paddingBottom: 50,
    },

    title: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },

});