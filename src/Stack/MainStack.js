import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../Pages/Preload'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'

const Stack = createStackNavigator();



export default function Main(){
    return (
        <Stack.Navigator
            initialRouteName = "Preload"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name = "Preload" component = {Preload}/>
            <Stack.Screen name = "SignIn" component = {SignIn}/>
            <Stack.Screen name = "SignUp" component = {SignUp}/>
        </Stack.Navigator>
        )
}