import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';



import { Dimensions } from 'react-native';

const vw = Dimensions.get('window').width;
const vh = Dimensions.get('window').height;


export const Container = styled.SafeAreaView`
    background-color: #292D33;
    flex: 1;
    align-items: center;
`;

export const InputArea = styled.View`

`;

export const styles = StyleSheet.create({
    LoginButton: {
        width: 0.7 * vw,
        height: 0.07 * vh,
        backgroundColor: '#FFFFFF',
        marginTop: 0.05 * vh,
        color: '#181925',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontFamily: 'Poppins-Regular'
    },
    TextInputArea:{
        backgroundColor: '#383941',
        width: 0.8 * vw,
        height: 0.07 * vh,
        borderRadius: 30,
        paddingLeft: 0.13 * vw,
        color: "#FFFFFF",
        fontSize: 16,
        left: -16
    },
    LoginScreenFieldText:{
        color: "#CCE6F4",
        marginTop: 10,
        marginLeft: 20
    },
    InputIcon: {
        left: 25,
        zIndex: 2
    }


});
  