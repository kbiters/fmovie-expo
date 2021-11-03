import React, {useState} from "react";
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import axios from 'axios';

export default function RegisterDirector() {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmit = () => {

        const data = {
            name: name,
            lastName: lastName,
        }

        if (!(data.name === "") && !(data.lastName === "")) {
            axios.post("http://192.168.1.95:8080/directors", data);
            alert("Director saved successfully!")
        } else {
            alert("Director saving failed, both fields must be complete!")
        }

    }


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={{
                        marginVertical: 30,
                        fontSize: 25,
                    }}>Register new director</Text>
                </View>

                <TextInput
                    style={styles.txtInput}
                    onChangeText={setName}
                    value={name}
                    placeholder='Name'
                />

                <TextInput
                    style={styles.txtInput}
                    onChangeText={setLastName}
                    value={lastName}
                    placeholder='Last Name'
                />

                <View style={styles.buttonSubmit}>
                    <Button
                        onPress={onSubmit}
                        title="Submit"
                    />

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 25,
        },

        regForm: {
            alignSelf: 'stretch',
        },

        title: {
            fontsize: 24,
            paddingBottom: 30,
        },

        header: {
            fontsize: 24,
            paddingBottom: 10,
            marginBottom: 40,
            borderBottomColor: '#42CCD8',
            borderBottomWidth: 1,
        },

        txtInput: {
            height: 35,
            marginBottom: 30,
            paddingHorizontal: 10,
            borderBottomColor: '#42CCD8',
            borderBottomWidth: 1.5,
        },

        buttonSubmit: {
            marginTop: 10,
            opacity: 0.8,
        },

    }
);
