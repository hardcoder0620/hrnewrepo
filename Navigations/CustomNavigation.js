import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../src/screens/LoginScreen';
import JobSeeker from '../src/screens/JobSeeker';
import HomeScreen from '../src/screens/HomeScreen';
import CustomDrawerContent from './CustomDrawerContent';
const Drawer = createDrawerNavigator();

const CustomNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
      {/* <Drawer.Screen name='Login' component={LoginScreen} /> */}
      <Drawer.Screen name='job_seeker' options={{ headerShown: false }} component={JobSeeker} />
    </Drawer.Navigator>
  )
}

export default CustomNavigation;