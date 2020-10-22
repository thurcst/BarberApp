import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

export default function App(){

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

  
  return (
    <View style={styles.container}>
      <Text style={styles.temp_text}>Barber</Text>
      <Text style={styles.temp_text}>Shop</Text>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp_text:{
    color: '#2ec356',
    fontSize: 50,
  },
});
