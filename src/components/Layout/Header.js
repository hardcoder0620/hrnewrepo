import { StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{ marginVertical: 10, marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={ () => navigation.openDrawer() }>
                    <Image source={require('../../assets/Menu.png')} />
                </TouchableOpacity>
                <View>
                    <Image source={require('../../assets/whatsuphr.png')} />
                </View>
                <TouchableOpacity>
                    <FontAwesome5 name="bell" solid size={22} color="#0076EB" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})