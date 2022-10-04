import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../src/screens/HomeScreen';
import RegisterScreen from '../src/screens/RegisterScreen';

const Drawer = createDrawerNavigator();
const Main = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='RegisterScreen' component={RegisterScreen} />
        </Drawer.Navigator>
    )
}

export default Main;