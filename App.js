import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Movies} from "./components/movies/Movies";
import {Directors} from "./components/directors/Directors";
import {Actors} from "./components/actors/Actors";

export default function App() {
    return (
        <View style={styles.container}>

            <View>
                <Movies/>
            </View>

            <View>
                <Directors/>
            </View>

            <View>
                <Actors/>
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
