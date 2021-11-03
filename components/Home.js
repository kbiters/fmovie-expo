import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({ navigation }) => {
        return (
            <View style={styles.container}>
                <Text style={{
                    marginVertical: 10,
                    fontSize: 50,
                }}>Home FMovie</Text>
                <View style={styles.ViewButtonHome}>
                    <Button
                        title="Actors"
                        style={styles.btnHome}
                        onPress={() => navigation.navigate('Actors')}/>
                    <Button
                        title="Directors"
                        style={styles.btnHome}
                        onPress={() => navigation.navigate('Directors')}/>
                    <Button
                        title="Movies"
                        style={styles.btnHome}
                        onPress={() => navigation.navigate('Movies')}/>
                </View>
            </View>
        );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    ViewButtonHome:{
        padding: 20,
        margin: 25,
    },

    btnHome: {
        padding: 20,
        margin: 25,
    },
});