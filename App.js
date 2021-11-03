import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Movies} from "./components/movies/Movies";
import {Directors} from "./components/directors/Directors";
import {Actors} from "./components/actors/Actors";
import RegisterMovie from "./components/movies/RegisterMovie";
import RegisterDirector from "./components/directors/RegisterDirector";

export default function App() {
    return (
        <View style={styles.container}>

            <View>
                <RegisterMovie/>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
