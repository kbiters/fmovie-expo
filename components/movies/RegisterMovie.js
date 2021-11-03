import { useState } from "react";
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';

import axios from 'axios';

export default function RegisterMovie() {

    const [title, setTitle] = useState("");
    const [overview, setOverview] = useState("");
    const [rate, setRate] = useState(0);
    const [trailer, setTrailer] = useState("");
    const [image, setImage] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [language, setLanguage] = useState("");
    const [duration, setDuration] = useState(0);
    const [adult, setAdult] = useState("");
    const [genre, setGenre] = useState("");

    const onSubmit = () => {

        const data = {
            title: title,
            overview: overview,
            rate: rate,
            trailer: trailer,
            image: image,
            releaseDate: new Date(releaseDate),
            language: language,
            duration: duration,
            adult: adult,
            genre: genre,
        }

        console.log(data);

        axios.post("http://localhost:8080/movies", data);

    }


    return (

        <SafeAreaView>
            <View>
                <Text style={{
                    marginVertical: 30,
                    fontSize: 25,
                }}>Add new movie</Text>
            </View>
            <TextInput
                style={styles.txtInput}
                onChangeText={setTitle}
                value={title}
                placeholder='Title'
            />

            <TextInput
                style={styles.txtInput}
                onChangeText={setOverview}
                value={overview}
                placeholder='Overview'
            />

            <TextInput
                style={styles.txtInput}
                onChangeText={setRate}
                value={rate}
                placeholder='Rate'
                keyboardType="numeric"
            />

            <TextInput
                style={styles.txtInput}
                onChangeText={setTrailer}
                value={trailer}
                placeholder='Trailer-URL'
            />

            <TextInput
                style={styles.txtInput}
                value={releaseDate}
                onChangeText={setReleaseDate}
                placeholder='YYYY-MM-DD'
            />

            <TextInput
                style={styles.txtInput}
                onChangeText={setImage}
                value={image}
                placeholder='Image-URL'
            />

            <TextInput
                style={styles.txtInput}
                onChangeText={setLanguage}
                value={language}
                placeholder='Language'
            />
            <TextInput
                style={styles.txtInput}
                onChangeText={setDuration}
                value={duration}
                placeholder='Duration / min'
                keyboardType="numeric"
            />
            <TextInput
                style={styles.txtInput}
                onChangeText={setAdult}
                value={adult}
                placeholder='Adult'
            />
            <TextInput
                style={styles.txtInput}
                onChangeText={setGenre}
                value={genre}
                placeholder='Genre'
            />
            <Button
                onPress={onSubmit}
            />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create(
    {
        regForm: {
            alignSelf: 'stretch',
        },

        header: {
            fontsize: 24,
            paddingBottom: 10,
            marginBottom: 40,
            borderBottomColor: '#42CCD8',
            borderBottomWidth: 1,
        },

        txtInput: {
            alignSelf: 'stretch',
            alignItems: 'center',
            height: 40,
            marginBottom: 30,
            paddingHorizontal: 10,
            borderWidth: 1.5,
            borderRadius: 5,
            borderColor: '#42CCD8',
        },

        button: {
            alignSelf: 'stretch',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#42CCD8',
            marginTop: 40,
            borderRadius: 10,
        },

    }
);
