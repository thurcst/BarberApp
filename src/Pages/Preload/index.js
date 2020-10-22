import React, { useEffect } from 'react';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

const statusBarHeight = Constants.statusBarHeight

import BarberLogo from '../../assets/barber.svg'

import { Container, LoadingIcon } from './styles.js';

/*
    Barbearia           = Vermelho / Azul e branco
    Salão de beleza     = Rosa
    Manicure / Pedicure = Rosa
    Massagista          = Azul
*/

export default () => {
    
    const navigation = useNavigation();

    useEffect(() =>{
        async function getLocationAsync() {
            // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
            const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
            if (status === 'granted') {
              return Location.getCurrentPositionAsync({ enableHighAccuracy: true });
            } else {
              throw new Error('Location permission not granted');
            }
          }
        
          async function checkPermissions(){
            const { status, expires, permissions } = await Permissions.getAsync(Permissions.LOCATION);
            if(status !== 'granted'){
              alert('Hey! We need those permissions :(')
            }
          }
        
        const checkToken = async() =>{
            const token = await AsyncStorage.getItem('token');
            if(token !== null){
                // Caso o token não seja vazio, valida e loga
                
            }
            else{
                //manda o mano pro login caso não esteja logado.
                navigation.navigate('SignIn');
            }
        }
        getLocationAsync();
        checkPermissions();
        checkToken();
    },[]);

    return(
        <Container style={{marginTop: statusBarHeight}}>
            <BarberLogo width = "100%" height = "160"/>
            <LoadingIcon size="large" color='#fff' />
        </Container>
    )
}