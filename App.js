import React from 'react';

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./components/Home";
import {NavigationContainer} from "@react-navigation/native";
import {Actors} from "./components/actors/Actors";
import {Directors} from "./components/directors/Directors";
import {Movies} from "./components/movies/Movies";
import RegisterActor from "./components/actors/RegisterActor";
import RegisterDirector from "./components/directors/RegisterDirector";
import RegisterMovie from "./components/movies/RegisterMovie";
import {Movie} from "./components/movies/Movie";
import {MovieDetailed} from "./components/movies/MovieDetailed";


export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Actors" component={Actors}/>
                <Stack.Screen name="Directors" component={Directors}/>
                <Stack.Screen name="Movies" component={Movies}/>
                <Stack.Screen name="RegisterActor" component={RegisterActor}/>
                <Stack.Screen name="RegisterDirector" component={RegisterDirector}/>
                <Stack.Screen name="RegisterMovie" component={RegisterMovie}/>
                <Stack.Screen name="Movie" component={Movie}/>
                <Stack.Screen name="MovieDetailed" component={MovieDetailed}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

