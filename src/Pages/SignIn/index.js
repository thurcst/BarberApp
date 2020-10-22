import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight
import BarberLogo from '../../assets/barber.svg'
import {Container, InputArea} from './styles.js';

export default function(){
    return(
        <Container style={{marginTop: statusBarHeight, }}>
            <BarberLogo width="100%" height="160" />
        </Container>
    )
}