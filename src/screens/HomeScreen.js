import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Layout/Header'
import globalStyles from '../../globalStyles'
import Tabs from '../../Navigations/Tabs'
import JobPostCard from '../components/JobPostCard'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <View style={{ position: 'absolute', height: '100%', bottom: 0, flex: 1 }}>
                <Image style={{ flex: 1 }} source={require('../assets/bg-strip.png')} />
            </View>
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', margin: 16 }}>
                        <View style={{ flex: 1, position: 'relative' }}>
                            <Image source={require('../assets/title-bg.png')} />
                            <Text style={globalStyles.title}>Popular Jobs</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('All_Jobs')}>
                                <Text className="text-gray-500">Show All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingVertical: 10,
                        }}
                    >
                        <JobPostCard
                            title='Lead Product Manager'
                            firm="Google"
                            address="lorem ispum dollor"
                            period="5 days"
                        />
                        <JobPostCard
                            title='Lead Product Manager'
                            firm="Google"
                            address="lorem ispum dollor"
                            period="5 days"
                        />
                        <JobPostCard
                            title='Lead Product Manager'
                            firm="Google"
                            address="lorem ispum dollor"
                            period="5 days"
                        />
                        <JobPostCard
                            title='Lead Product Manager'
                            firm="Google"
                            address="lorem ispum dollor"
                            period="5 days"
                        />
                    </ScrollView>
                    <View style={{ marginHorizontal: 16 }}>
                        <View style={[homeStyle.cardContainer, { marginVertical: 10 }]}>
                            <Text style={homeStyle.headline}>Are You</Text>
                            <View style={{ alignSelf: 'center', flex: 1 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('job_seeker')}>
                                    <Text style={[homeStyle.btn, { marginBottom: 10 }]}>Job Seeker</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=>navigation.navigate('thankYou')} >
                                    <Text style={[homeStyle.btn, { marginBottom: 10 }]}>thank you</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View style={{ flex: 1, position: 'relative', marginVertical: 10 }}>
                                <Image source={require('../assets/title-bg.png')} />
                                <Text style={globalStyles.title}>Services</Text>
                            </View>
                            <View style={homeStyle.serviceContainer}>
                                <View style={homeStyle.serviceCard}>
                                    <View style={[homeStyle.cardContainer, homeStyle.serviceCardImg]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/recruitment-service.png')} />
                                    </View>
                                    <Text style={homeStyle.serviceText}>Recruitment Service</Text>
                                </View>
                                <View style={homeStyle.serviceCard}>
                                    <View style={[homeStyle.cardContainer, homeStyle.serviceCardImg]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/certification-program.png')} />
                                    </View>
                                    <Text style={homeStyle.serviceText}>IHLA Certification Program</Text>
                                </View>
                                <View style={homeStyle.serviceCard}>
                                    <View style={[homeStyle.cardContainer, homeStyle.serviceCardImg]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/job-portal.png')} />
                                    </View>
                                    <Text style={homeStyle.serviceText}>Job Portal</Text>
                                </View>
                            </View>
                            {/* other services */}
                            <View>
                                <View style={{ flex: 1, position: 'relative', marginTop: 16, marginBottom: 12 }}>
                                    <Image source={require('../assets/title-bg.png')} />
                                    <Text style={globalStyles.title}>Other Services</Text>
                                </View>
                                <View style={[ homeStyle.serviceContainer, { flexWrap: 'wrap', justifyContent: 'flex-start' } ]}>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/corporate-training.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>Corporate Training</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/motivational-speaker.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>Motivational Speaks</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/payroll-statutory-service.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>Payroll & Statutory</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/new-pf-and-esif-registration-services.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>New PF & ESIC registration services</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/new-hr-setup-management.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>New HR setup management</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/virtual-hr-consulting-service.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>Virtual HR consulting services</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/hr-audits.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>HR Audits</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/labour-laws-consulting.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>Labour Laws consulting services</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/contract-labour-management.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>Contract labour management</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/policies-and-license-work.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>Policies & Licenses work</Text>
                                    </View>
                                    <View style={[ homeStyle.cardContainer, homeStyle.cardCol ]}>
                                        <Image style={{ alignSelf: 'center' }} source={require('../assets/24-7-hr-support.png')} />
                                        <Text style={[homeStyle.serviceText, {fontSize: 11, marginBottom: 0} ]}>24*7 Our HR support line</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Tabs />
            </View>
        </View>
    )
}

const homeStyle = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 3,
        borderRadius: 16,
        shadowColor: '#669eff',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    headline: {
        fontSize: 18,
        fontFamily: 'Mulish_600SemiBold',
        color: '#151313',
        marginBottom: 10
    },
    btn: {
        backgroundColor: '#FAEC25',
        width: 194,
        textAlign: 'center',
        paddingVertical: 8,
        borderRadius: 5,
        fontSize: 14,
        fontFamily: 'Mulish_600SemiBold'
    },
    serviceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    serviceCard: {
        width: '29%'
    },
    serviceText: {
        fontSize: 13,
        color: '#151313',
        fontFamily: 'Mulish_600SemiBold',
        textAlign: 'center',
        marginTop: 8
    },
    serviceCardImg: {
        borderRadius: 12,
        height: 94,
        justifyContent: 'center'
    },
    cardCol: {
        width: "30%",
        marginBottom: 12,
        marginHorizontal: 6,
        paddingBottom: 8
    }
})
export default HomeScreen