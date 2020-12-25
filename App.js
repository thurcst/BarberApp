import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'


import App from './src';
import Stacks from './src/Stack/MainStack'
import UserContextProvider from './src/Contexts/UserContext'

export default function Main(){
  return(
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar hidden/>
        <Stacks/>
      </NavigationContainer>
    </UserContextProvider>
  ) 
}