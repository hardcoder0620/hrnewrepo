import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyles from '../../globalStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const LoginScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ position: 'absolute', height: '100%', bottom: 0, top: 0, flex: 1 }}>
                <Image style={{ flex: 1 }} source={require('../assets/bg-strip.png')} />
            </View>
            <SafeAreaView>
                <View style={styles.headerView} >
                    <Text style={styles.headerViewtext} >Login</Text>
                    <View style={styles.headerViewIconWrapper}>
                        <TouchableOpacity onPress={() => {
                            navigation.goBack()
                        }}
                        >
                            <MaterialCommunityIcons style={styles.headerViewIcon} name='chevron-left' />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View >
                        <View style={styles.loginPageImgWrapper} >
                            <Image style={styles.loginPageImg} source={require('../assets/loginPageImg.png')} />
                        </View>

                        <View style={styles.welBackView} >
                            <Image source={require('../assets/title-bg.png')} />
                            <Text style={[globalStyles.title, { left: 20 }]}>Welcome Back</Text>
                        </View>
                        <View style={styles.accLogInTextView} >
                            <Text style={styles.accLogInText} >Account Log In</Text>
                        </View>

                        <View style={styles.inputFieldsWrapper} >
                            <View>
                                <TextInput placeholder='Enter Email Id' style={styles.inputFiled} />
                            </View>
                            <View>
                                <TextInput secureTextEntry={true} placeholder='Password' style={styles.inputFiled} />
                            </View>
                            <View style={styles.forgetPassTextWrapper} >
                                <TouchableOpacity>
                                    <Text style={styles.forgetPassText} >Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.loginRegisterWrapper} >
                            <TouchableOpacity  >
                                <Text style={styles.logBtnText}  >LOGIN</Text>
                            </TouchableOpacity>
                            <View style={styles.havAccountRegister} >
                                <Text style={styles.havAccoText} >Don’t have an account?</Text>
                                <TouchableOpacity 
                                onPress={()=>{
                                    navigation.navigate('Signup')
                                }}
                                >
                                    <Text style={styles.registerPath} >REGISTER</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        paddingVertical: 20,

    },
    headerViewtext: {
        color: '#151313',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Mulish_600SemiBold'
    },
    headerViewIconWrapper: {
        position: 'absolute',


    },
    headerViewIcon: {

        fontSize: 28,
        paddingVertical: 17,
        paddingHorizontal: 20

    },
    loginPageImgWrapper: {
        paddingHorizontal: 23,
        marginTop: 65
    },
    loginPageImg: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.86,

    },
    welBackView: {
        paddingHorizontal: 16,
        marginTop: 40
    },
    accLogInTextView: {
        marginTop: 11,
        paddingHorizontal: 16
    },
    accLogInText: {
        color: '#0F2D52',
        fontSize: 22,
        fontFamily: 'Mulish_800ExtraBold'
    },
    inputFieldsWrapper: {
        marginTop: 18,
        paddingHorizontal: 16
    },
    inputFiled: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#0076EB',
        height: 40,
        paddingLeft: 21,
        fontFamily: 'Mulish_400Regular',
        borderRadius: 5
    },
    forgetPassTextWrapper: {
        paddingTop: 16,

    },
    forgetPassText: {
        color: '#0F2D5299',
        textAlign: 'right',
        fontSize: 13,
        fontFamily: 'Mulish_600SemiBold'

    },
    loginRegisterWrapper: {
        marginTop: 34,
        alignItems: 'center'
    },
    logBtnText: {
        backgroundColor: '#FAEC25',
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 5,
        color: '#151313',
        fontFamily: 'Mulish_600SemiBold',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    havAccountRegister: {
        marginTop: 17,
        flexDirection: 'row'
    },
    havAccoText: {
        color: '#0F2D5299',
        fontSize: 13,
        fontFamily: 'Mulish_400Regular',
        

    },
    registerPath: {
        color: '#0076EB',
        fontFamily: 'Mulish_900Black',
        paddingLeft: 5,
        fontSize: 13,

    }
})


export default LoginScreen;