import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Movie} from "./Movie";

export const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);

    const fetchMovies = async () => {
        const url = "http://localhost:8080/movies";
        const resp = await fetch(url);
        const allMovies = await resp.json();
        const listOfMovies = allMovies.map((movie) => {
            return {
                id: movie.id,
                title: movie.title,
                genre: movie.genre,
                duration: movie.duration,
                language: movie.language,
                rate: movie.rate,
                actors: movie.actors,
            };
        });

        setMovies(listOfMovies);
    }

    return (
        <View style={styles.container}>
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
                    <Movie key={movie.id}
                           id={movie.id}
                           title={movie.title}
                           genre={movie.genre}
                           duration={movie.duration}
                           language={movie.language}
                           rate={movie.rate}
                           actors={movie.actors}
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