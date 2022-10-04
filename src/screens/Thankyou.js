import { View, ScrollView,Text ,StatusBar,Image, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Thankyou() {
  return (
    <View style={{flex:1,backgroundColor:'white'}} >
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <ScrollView style={{flex:1}}>
              <View style={styles.thankuImgView} >
                <Image style={styles.thankuImg}  source={require('../assets/thankyou.png')} />
              </View>
              <View  style={styles.thanksImgView} >
                <Image style={styles.thanksImg} source={require('../assets/Layer1.png')} />
              </View>
              <View style={styles.content} >
                    <Text style={styles.paySucces} >Payment Successful!</Text>
                    <Text style={styles.hoorey} >Hooray! You Have Completed Your Payment.</Text>
                    <Text style={styles.amountPaid} >AMOUNT PAID</Text>
                    <Text style={styles.amount} >Rs. 253.39</Text>
                    <TouchableOpacity style={{marginTop:33}}>
                        <Text style={styles.continueText} >CONTINUE</Text>
                    </TouchableOpacity>
              </View>
            </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({
    thankuImgView:{
        paddingHorizontal:40,
        marginTop:62
    },
    thankuImg:{
        width:'100%',
        height:undefined,
        aspectRatio:1.31
    },
    thanksImgView:{
        marginTop:51,
        paddingHorizontal:65
    },
    thanksImg:{
        width:'100%',
        height:undefined,
        aspectRatio:2.65
    },
    content:{
        marginTop:42,
        alignItems:'center'
    },
    paySucces:{
        color:'#151313',
        fontSize:23,
        fontStyle:'Mulish-Semi-Bold'
    },
    hoorey:{
        color:'#151313',
        fontSize:14,
        marginTop:18,
        fontStyle:'Mulish-Semi-Bold'
    },
    amountPaid:{
        marginTop:33,
        color:'#151313',
        fontSize:13,
        textTransform:'uppercase',
        fontStyle:'Mulish-Semi-Bold'
    },
    amount:{
        color:'#000000',
        fontSize:20,
        marginTop:8,
        fontStyle:'Mulish-Semi-Bold',
        fontWeight:'800'
    },
    continueText:{
        paddingHorizontal:65,
        paddingVertical:12,
        borderRadius:5,
        color:'#151313',
        fontSize:14,
        fontStyle:'Mulish-Semi-Bold',
        backgroundColor:'#FAEC25'
    }
})