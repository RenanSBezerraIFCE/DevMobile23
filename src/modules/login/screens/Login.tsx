/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity, View,StyleSheet } from 'react-native';
import { ContainerPlugin } from '../styles/login.style';
import Input from '../../../shared/components/input/Input';
import Butomn from '../../../shared/components/butomn/butomn';
import { useState } from 'react';



const Login = () => {

    const signIn = () =>{
        alert("E-mail do usuário: "+ email+"\nSenha do usuário: "+senha);
    }
    
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');

    return (
        <View>
            <ContainerPlugin>
                <Text style={style.log}>Login</Text>
                <Input placeholder='E-mail' onChangeText={setEmail}/>
                <Input placeholder="Senha" onChangeText={setSenha}/>
                <Butomn onpress={signIn}/>

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

    }
})