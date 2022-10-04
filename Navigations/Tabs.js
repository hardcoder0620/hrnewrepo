import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

const Tabs = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#DCEFFC', paddingHorizontal: 16, paddingVertical: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ alignItems: 'center' }}>
                    <MaterialCommunityIcons name="home" size={25} color="grey" />
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Jobs')} style={{ alignItems: 'center' }}>
                    <MaterialCommunityIcons name="briefcase-variant" size={25} color="grey" />
                    <Text>Jobs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <MaterialCommunityIcons name="account" size={26} color="grey" />
                    <Text>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <MaterialCommunityIcons name="cog" size={24} color="grey" />
                    <Text>Setting</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Tabs;