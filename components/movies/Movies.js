import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Movie} from "./Movie";

export const Movies = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const fetchMovies = async () => {
        const url = "http://192.168.1.95:8080/movies";
        const resp = await fetch(url);
        const allMovies = await resp.json();
        const listOfMovies = allMovies.map((movie) => {
            return {
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                rate: movie.rate,
                trailer: movie.trailer,
                image: movie.image,
                language: movie.language,
                duration: movie.duration,
                releaseDate: movie.releaseDate,
                adult: movie.adult,
                genre: movie.genre
            };
        });

        setMovies(listOfMovies);
    }

    return (
        <View style={styles.container}>
            <View>
                <Button
                    title="Register Movie"
                    onPress={() => navigation.navigate('RegisterMovie')}
                />
            </View>
            <View style={styles.moviesStyle}>
                <Text style={styles.title}>#</Text>
                <Text style={styles.title}>TITLE</Text>
                <Text style={styles.title}>GENRE</Text>
                <Text style={styles.title}>DURATION</Text>
                <Text style={styles.title}>LANGUAGE</Text>
                <Text style={styles.title}>RATE</Text>
            </View>
            <View>
                {movies.map((movie) => (
                    <Movie key={movie.id} navigation={navigation} props={movie}/>

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

    moviesStyle: {

        flexDirection: "row",
        marginTop: 50,

    },

    title: {
        marginRight: 20,
        fontSize: 25,
        fontWeight: "bold",
    },

});