import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import globalStyles from '../globalStyles';
import { useNavigation } from '@react-navigation/native';

function CustomDrawerContent(props) {
    const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ margin: 30, alignSelf: 'center' }}>
             <MaterialCommunityIcons name='account-circle' size={68} />
            <TouchableOpacity onPress={ () =>  {
                navigation.navigate('Login')
                } }>
                <Text style={[{ fontSize: 14, textAlign: 'center' }, globalStyles.colorPrimary]}>Login</Text>  
            </TouchableOpacity>   
        </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;