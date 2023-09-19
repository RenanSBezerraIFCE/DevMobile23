import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation();

    const [indexImg1, setIndexImg1] = useState(true)
    const [indexImg2, setIndexImg2] = useState(false)
    const [indexImg3, setIndexImg3] = useState(false)

    const aditionCart = () => {
        alert("Produto adicionado ao carrinho com sucesso!")
    }

    const BackToLogin = () => {
        navigation.navigate("Login")
    }

    return (
        <View style={style.container}>

            <View style={style.NavBar}>
                <TouchableOpacity onPress={BackToLogin}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
                <Icon name="shopping-cart" size={40} color="white" style={style.Icon} />
            </View>


            <View style={style.Shop}>
                {indexImg1 ? <Image style={style.ImageProduct} source={require('../../../../assets/ning1.jpg')} /> : null}
                {indexImg2 ? <Image style={style.ImageProduct} source={require('../../../../assets/ning2.jpg')} /> : null}
                {indexImg3 ? <Image style={style.ImageProduct} source={require('../../../../assets/ning3.jpg')} /> : null}

                <View style={style.ImagesMini}>

                    <TouchableOpacity onPress={() => (setIndexImg1(true), setIndexImg2(false), setIndexImg3(false))}>
                        <Image style={style.ImageProductMini} source={require('../../../../assets/ning1.jpg')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(true), setIndexImg3(false))}>
                        <Image style={style.ImageProductMini} source={require('../../../../assets/ning2.jpg')} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(false), setIndexImg3(true))}>
                        <Image style={style.ImageProductMini} source={require('../../../../assets/ning3.jpg')} />
                    </TouchableOpacity>
                </View>

                <Text style={style.NameProduct}>Figure 1/7 Ningguang from Genshin Impact
                </Text>
                <Text style={style.Price}>R$299.90</Text>
                <Image style={style.Avaliation} source={require('../../../../assets/star.png')} />
                <Text style={style.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quo rem, perspiciatis quaerat illum ratione possimus at consequuntur, iste praesentium iure repellendus! Mollitia odit repudiandae est! Impedit laborum alias atque?</Text>

                <TouchableOpacity onPress={aditionCart}>
                    <Icon name="plus-square-o" size={50} color="#191970" style={style.IconAdd} />
                </TouchableOpacity>

            </View>

        </View>

    )
}

export default Home;


const style = StyleSheet.create({
    container: {
        flex: 1
    },
    Shop: {
        padding: 10
    },
    NavBar: {
        justifyContent: 'space-between',
        flexDirection: "row",
        backgroundColor: '#191970',
        height: 65,
        padding: 10
    },
    NameProduct: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#191970",
        marginBottom: 20
    },
    Description: {
        fontSize: 18,
        textAlign: 'justify',
        marginTop: 15
    },
    Price: {
        fontSize: 24
    },
    ImageProduct: {
        width: 395,
        height: 250,
        marginBottom: 25,
        borderRadius: 5,
        display: 'flex'
    },
    ImageProductMini: {
        width: 60,
        height: 40,
        marginBottom: 25,
        borderRadius: 2,
        display: 'flex',
        margin: 10
    },
    ImagesMini: {
        marginTop: '-21%',
        marginLeft: '20%',
        flexDirection: "row",
    },
    Avaliation: {
        width: 150,
        height: 30
    },
    Icon: {
        height: 50,
        margin: 5
    },
    IconAdd: {
        height: 50,
        marginLeft: '48%',
        marginTop: 10
    }
})