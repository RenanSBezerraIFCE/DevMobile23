import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../modules/login/screens/Login/Login';
import Home from '../../modules/Home/screens/Home/Home';
import Cart from '../../modules/Cart/screens/Cart/Cart';
import Favorits from '../../modules/Favorits/screens/Favorits/Favorits';

const Stk = createNativeStackNavigator();

const Stack = () =>{
    return(
        <Stk.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stk.Screen name='Login' component={Login}/>
            <Stk.Screen name='Home' component={Home}/>
            <Stk.Screen name='Cart' component={Cart}/>
            <Stk.Screen name='Favorits' component={Favorits}/>
        </Stk.Navigator>
    )
}

export default Stack;