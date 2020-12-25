import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';


import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;

import {Ionicons, Entypo} from '@expo/vector-icons'

const statusBarHeight = Constants.statusBarHeight
import BarberLogo from '../../assets/Logo_pepo.svg'
import {Container, InputArea, styles } from './styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function(){

    let [fontsLoaded] = useFonts({
        'Poppins-Regular':  require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium':   require('../../assets/fonts/Poppins-Medium.ttf')
    });
    if(!fontsLoaded){
        return <AppLoading />;
    }

    return(
        <Container>
            <View
                style={{
                    width: 336
                }}
            >
                <BarberLogo width="100%" height = "330"/>
            </View>
            <View>
                <Text 
                    style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: 18,
                        color: "#CCE6F4",
                        marginTop: 10,
                        marginLeft: 20
                    }}
                >
                    Email
                </Text>
                <View style = {{flexDirection: "row", alignItems: "center"}}>
                    <Ionicons name="md-mail" size={24} color="#cce6f4" style={styles.InputIcon}/>
                    <TextInput
                        style={styles.TextInputArea}
                    />
                </View>
                    

                <Text 
                    style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: 18,
                        color: "#CCE6F4",
                        marginTop: 10,
                        marginLeft: 20
                    }}
                >
                    Senha
                </Text>
                <View 
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Entypo name="lock-open" size={24} color="#CCE6F4" style={styles.InputIcon}/>
                    <TextInput
                        style={styles.TextInputArea}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={styles.LoginButton} >
                    <Text 
                        style={{
                            fontFamily: "Poppins-Medium",
                            fontSize: 24,
                            color: "#292d33"
                        }}
                    >
                        Entrar
                    </Text>
                </TouchableOpacity>

                <View style={{flexDirection: "row", alignItems: "center", paddingTop: 0.03*vh}}>
                    <Text style = {{
                        color: "#CCE6F4",
                        fontFamily: "Poppins-Medium",
                        fontSize: 14,
                    }}> Ainda não tem uma conta? 
                    </Text>
                        <TouchableOpacity>
                            <Text style = {{
                                color: "#4BA3C3", 
                                fontFamily: "Poppins-Bold",
                                fontSize: 14,
                            }}
                            > Cadastre-se!</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </Container>
    )
}