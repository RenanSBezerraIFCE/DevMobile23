import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../modules/login/screens/Login/Login';
import Home from '../../modules/login/screens/Home/Home';

const Stk = createNativeStackNavigator();

const Stack = () =>{
    return(
        <Stk.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
            <Stk.Screen name='Login' component={Login}/>
            <Stk.Screen name='Home' component={Home}/>
        </Stk.Navigator>
    )
}

export default Stack;