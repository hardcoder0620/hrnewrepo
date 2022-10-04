import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const JobPostCard = (props) => {
    return (
        <View className="mx-4">
            <View style={[{ flexDirection: 'row', justifyContent: 'space-around' }, cardStyles.cardContainer]}>
                <View>
                    <Image source={require('../assets/google.jpg')} />
                </View>
                <View style={{ marginLeft: 16 }}>
                    <Text className="text-xl" style={[cardStyles.cardTitle]}>{props.title}</Text>
                    <Text>{props.firm}</Text>
                    <Text>{props.address}</Text>
                    <Text style={{ color: '#0076EB', marginTop: 5 }}>{props.period}</Text>
                </View>
            </View>
        </View>
    )
}
const cardStyles = StyleSheet.create({
    cardTitle:{
        height: 50,
        fontFamily: 'Raleway_500Medium',
        fontSize: 18
    },
    cardContainer:{
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 16,
        marginRight: 20,
        shadowColor: '#669eff',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    }
})
export default JobPostCard;