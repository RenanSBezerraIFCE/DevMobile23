/* eslint-disable prettier/prettier */
import React from 'react'
import { Text, TouchableOpacity, View,StyleSheet,Image, Alert } from 'react-native';
import { ContainerPlugin } from '../../styles/login.style';
import Input from '../../../../shared/components/input/Input';
import Butomn from '../../../../shared/components/butomn/butomn';
import { useState} from 'react';
import {useNavigation} from '@react-navigation/native'



const Login = () => {

    const singin=()=>{
        navigation.navigate("Home")
    }
    const navigation = useNavigation();

    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');

    return (
        <View>
            <ContainerPlugin>
                <Image source={require("../../../../assets/shop.jpg")} style={style.logo}/>
                <Input placeholder='E-mail' onChangeText={setEmail}/>
                <Input placeholder="Senha" onChangeText={setSenha}/>
                <Butomn onpress={singin}/>
            </ContainerPlugin>
        </View>
    );
};

export default Login;

const style = StyleSheet.create({
    log:{
        width: 380,
        height:50,
        textAlign:'center',
        fontSize: 20,
        borderRadius: 3,
        fontWeight:'bold'

    },
    logo:{
        width:200,
        height: 210,
        marginLeft: 10,
        marginBottom: 50,
        marginTop:-150

    }
})