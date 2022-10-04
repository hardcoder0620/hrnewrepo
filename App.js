import  * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import CustomNavigation from './Navigations/CustomNavigation';
import LoginScreen from './src/screens/LoginScreen';
import Thankyou from './src/screens/Thankyou';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='header' options={{ headerStyle: { backgroundColor: 'transparent' } }}>
                <Stack.Screen name="header" options={{ headerShown: false }} component={ CustomNavigation } />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen } />
                <Stack.Screen name="Register" component={ RegisterScreen } />
                <Stack.Screen name='thankYou' options={{headerShown:false}} component={Thankyou} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App