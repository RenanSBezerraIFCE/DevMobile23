import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Touchable, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { style } from '../../styles/home.style'
const Home = (props) => {

    const [user,setUser]= useState(props.route.params)

    const [products, setProducts] = useState({
        p1: {
            id: 1,
            title: 'Figure 1/7 Ningguang from Genshin Impact',
            price: 299.99,
            aval: 4.3,
            inCart: false,
            qtde: 0
        },
        p2: {
            id: 2,
            title: 'Capinha de telefone',
            price: 39.99,
            aval: 4.7,
            inCart: false,
            qtde: 0
        },
        p3: {
            id: 3,
            title: 'Boneca Barbie O Filme ',
            price: 899.99,
            aval: 4.1,
            inCart: false,
            qtde: 0
        },
        p4: {
            id: 4,
            title: 'Ventilador de coluna Mondial',
            price: 209.90,
            aval: 4.9,
            inCart: false,
            qtde: 0
        }
    }
    );


    const navigation = useNavigation();

    const [indexImg1, setIndexImg1] = useState(true)
    const [indexImg2, setIndexImg2] = useState(false)
    const [indexImg3, setIndexImg3] = useState(false)
    const [starCliked, setStarClicked] = useState(false)
    const [addCliked, setAddClicked] = useState(false)

    return (
        <View style={style.container}>

            <View style={style.NavBar}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Profile", user)}>
                    <Icon name="user" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Cart", products)}>
                    <Icon name="shopping-cart" size={40} color="white" style={style.Icon} />
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={style.Shop}>

                    <View style={style.Product}>{/* Produto 1 */}
                        <TouchableOpacity onPress={() => navigation.navigate("Product1", (products['p1']))}>
                            <Text style={style.NameProduct}>{products['p1'].title}</Text>
                        </TouchableOpacity>
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

                        <View style={style.optProduct}>
                            <View>
                                {products['p1'].inCart ?
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p1: { ...products.p1, ['inCart']: false } })} >
                                        <Text style={style.AddCart}>
                                            Remover do carrinho    <Icon name="minus-square" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p1: { ...products.p1, ['inCart']: true } })}>
                                        <Text style={style.AddCart}>
                                            Adicionar ao carrinho    <Icon name="plus-square-o" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                    </View>

                    <View style={style.Product}>{/* Produto 2 */}
                        <TouchableOpacity onPress={() => navigation.navigate("Product2", (products['p2']))}>
                            <Text style={style.NameProduct}>{products['p2'].title}</Text>
                        </TouchableOpacity>
                        {indexImg1 ? <Image style={style.ImageProduct} source={require('../../../../assets/capinha1.jpeg')} /> : null}
                        {indexImg2 ? <Image style={style.ImageProduct} source={require('../../../../assets/capinha2.jpeg')} /> : null}
                        {indexImg3 ? <Image style={style.ImageProduct} source={require('../../../../assets/capinha3.jpeg')} /> : null}

                        <View style={style.ImagesMini}>

                            <TouchableOpacity onPress={() => (setIndexImg1(true), setIndexImg2(false), setIndexImg3(false))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/capinha1.jpeg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(true), setIndexImg3(false))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/capinha2.jpeg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(false), setIndexImg3(true))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/capinha3.jpeg')} />
                            </TouchableOpacity>
                        </View>

                        <View style={style.optProduct}>
                            <View>
                                {products['p2'].inCart ?
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p2: { ...products.p2, ['inCart']: false } })} >
                                        <Text style={style.AddCart}>
                                        Remover do carrinho    <Icon name="minus-square" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p2: { ...products.p2, ['inCart']: true } })}>
                                        <Text style={style.AddCart}>
                                            Adicionar ao carrinho    <Icon name="plus-square-o" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                    </View>

                    <View style={style.Product}>{/* Produto 3 */}
                        <TouchableOpacity onPress={() => navigation.navigate("Product3", (products['p3']))}>
                            <Text style={style.NameProduct}>{products['p3'].title}</Text>
                        </TouchableOpacity>
                        {indexImg1 ? <Image style={style.ImageProduct} source={require('../../../../assets/barbie1.jpg')} /> : null}
                        {indexImg2 ? <Image style={style.ImageProduct} source={require('../../../../assets/barbie2.jpg')} /> : null}
                        {indexImg3 ? <Image style={style.ImageProduct} source={require('../../../../assets/barbie3.jpg')} /> : null}

                        <View style={style.ImagesMini}>

                            <TouchableOpacity onPress={() => (setIndexImg1(true), setIndexImg2(false), setIndexImg3(false))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/barbie1.jpg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(true), setIndexImg3(false))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/barbie2.jpg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(false), setIndexImg3(true))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/barbie3.jpg')} />
                            </TouchableOpacity>
                        </View>

                        <View style={style.optProduct}>
                            <View>
                                {products['p3'].inCart ?
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p3: { ...products.p3, ['inCart']: false } })} >
                                        <Text style={style.AddCart}>
                                            Remover do carrinho    <Icon name="minus-square" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p3: { ...products.p3, ['inCart']: true } })}>
                                        <Text style={style.AddCart}>
                                            Adicionar ao carrinho    <Icon name="plus-square-o" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                    </View>

                    <View style={style.Product}>{/* Produto 4 */}
                        <TouchableOpacity onPress={() => navigation.navigate("Product4", (products['p4']))}>
                            <Text style={style.NameProduct}>{products['p4'].title}</Text>
                        </TouchableOpacity>
                        {indexImg1 ? <Image style={style.ImageProduct} source={require('../../../../assets/venti1.jpg')} /> : null}
                        {indexImg2 ? <Image style={style.ImageProduct} source={require('../../../../assets/venti2.jpg')} /> : null}
                        {indexImg3 ? <Image style={style.ImageProduct} source={require('../../../../assets/venti3.jpg')} /> : null}

                        <View style={style.ImagesMini}>

                            <TouchableOpacity onPress={() => (setIndexImg1(true), setIndexImg2(false), setIndexImg3(false))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/venti1.jpg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(true), setIndexImg3(false))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/venti2.jpg')} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => (setIndexImg1(false), setIndexImg2(false), setIndexImg3(true))}>
                                <Image style={style.ImageProductMini} source={require('../../../../assets/venti3.jpg')} />
                            </TouchableOpacity>
                        </View>

                        <View style={style.optProduct}>
                            <View>
                                {products['p4'].inCart ?
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p4: { ...products.p4, ['inCart']: false } })} >
                                        <Text style={style.AddCart}>
                                            Remover do carrinho    <Icon name="minus-square" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity> :
                                    <TouchableOpacity onPress={() => setProducts({ ...products, p4: { ...products.p4, ['inCart']: true } })}>
                                        <Text style={style.AddCart}>
                                            Adicionar ao carrinho    <Icon name="plus-square-o" size={30} color="#191970" style={style.IconAdd} />
                                        </Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                    </View>

                </View>


            </ScrollView>
        </View >
    )
}

export default Home;
