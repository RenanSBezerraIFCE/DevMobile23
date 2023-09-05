import React from 'react'
import { View,Text,ImageBackground,StyleSheet } from "react-native";

const Home = () =>{
    return(<View style={style.container}>
        <ImageBackground source={require("../../../../assets/pokeword.jpg")} resizeMode='cover' style={{flex:1}} >
        <Text style={style.text}>Bem vindo ao mundo pokemon</Text>
        </ImageBackground>
        
    </View>)
}

export default Home;


const style = StyleSheet.create({
    text:{
        fontSize:26,
        fontWeight:'bold',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
        margin:10,
        padding:10,
        borderRadius:5,
        marginTop:'100%'

        
    },
    container:{
        flex:1

    }
})