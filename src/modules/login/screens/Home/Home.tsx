import React from 'react'
import { View,Text,ImageBackground,StyleSheet,Image } from "react-native";

const Home = () =>{
    return(<View style={style.container}>
        <Image style={style.ImageProduct} source={require('../../../../assets/ning.jpg')}/>
        <Text style={style.NameProduct}>Figure 1/7 Ningguang from Genshin Impact</Text>
        <Text style={style.Price}>R$299.90</Text>
        <Image style={style.Avaliation} source={require('../../../../assets/star.png')}/>
        <Text style={style.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo rem, perspiciatis quaerat illum ratione possimus at consequuntur, iste praesentium iure repellendus! Mollitia odit repudiandae est! Impedit laborum alias atque?</Text>
        
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
        flex:1,
        padding:10

    },
    NameProduct:{
        fontSize:28,
        fontWeight:'bold',
        color:"#191970"
    },
    Description:{
        fontSize:18,
        textAlign:'justify',
        marginTop:15
    },
    Price:{
        fontSize:24
    },
    ImageProduct:{
        width:395,
        height:250,
        marginBottom: 25,
        borderRadius:5
    },
    Avaliation:{
        width:150,
        height:30
    }
})