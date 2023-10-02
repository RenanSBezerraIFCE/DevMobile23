import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { style } from '../../styles/favorits.style'


const Favorits = () =>{

    const navigation = useNavigation();
    return(<View>
        <View style={style.NavBar}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Icon name="arrow-left" size={40} color="white" style={style.Icon} />
            </TouchableOpacity>
        </View>

    </View>)
}


export default Favorits