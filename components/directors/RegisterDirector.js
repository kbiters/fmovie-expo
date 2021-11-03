import { useState } from "react";
import React from 'react';
import { StyleSheet, TextInput, Button, SafeAreaView, Text, View } from 'react-native';

import axios from 'axios';

export default function RegisterDirector() {

    const [name, setName] = useState("");

    const onSubmit = () => {

        const data = {
            name: name,
        }

        axios.post("http://localhost:8080/directors", data);

    }


    return (
        <SafeAreaView>
            <View style={styles.title}>
                <Text>Register new director</Text>
            </View>

            <TextInput
                style={styles.txtInput}
                onChangeText={setName}
                value={name}
                placeholder='Name-Director'
            />

            <Button
                style={styles.button}
                onPress={onSubmit}
                title="Submit"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create(
    {
        regForm: {
            alignSelf: 'stretch',
        },

        title: {
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
            alignSelf: 'stretch',
            alignItems: 'center',
            height: 35,
            marginBottom: 30,
            paddingHorizontal: 10,
            borderBottomColor: '#42CCD8',
            borderBottomWidth: 1.5,
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
