import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {ChevronLeftIcon, ChevronRightIcon} from 'react-native-heroicons/outline'
import colors from '../assets/colors/colors'
const SettingsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{marginTop: 10, flex:1}}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 10, paddingHorizontal: 15}}>
            <TouchableOpacity
               onPress={()=>navigation.goBack()}
            >
               <ChevronLeftIcon size={22} color={colors.darkGray}/>
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
               <Text style={{fontSize: 20, fontWeight: '700', color: colors.black}}>Settings</Text>
            </View>
        </View>
        <ScrollView
         showsVerticalScrollIndicator={false}
         style={{paddingHorizontal: 16,marginTop: 10}}
        >
            <TouchableOpacity style={{paddingTop: 10,borderColor: colors.white,borderBottomColor: colors.lightGray, borderWidth: 1,}}>
                <Text style={{color: colors.lightGray, fontSize: 15, fontWeight: '500'}}>Account</Text>
                <View style={{paddingTop: 10,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingBottom: 10}}>
                    <View style={{}}>
                        <Text style={{color: colors.black, fontSize: 18, fontWeight: '500'}}>Account settings</Text>
                        <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400', paddingTop: 6}}>Privacy, Security, Change preference</Text>
                    </View>
                    <ChevronRightIcon size={15} color={colors.lightGray} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingTop: 10,borderColor: colors.white,borderBottomColor: colors.lightGray, borderWidth: 1,}}>
                <Text style={{color: colors.lightGray, fontSize: 15, fontWeight: '500'}}></Text>
                <View style={{paddingTop: 10,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingBottom: 10}}>
                    <View style={{}}>
                        <Text style={{color: colors.black, fontSize: 18, fontWeight: '500'}}>Legal & Policies</Text>
                        <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400', paddingTop: 6}}>Term of service, Data policies, Cookies</Text>
                    </View>
                    <ChevronRightIcon size={15} color={colors.lightGray} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingTop: 10,borderColor: colors.white,borderBottomColor: colors.lightGray, borderWidth: 1,}}>
                <Text style={{color: colors.lightGray, fontSize: 15, fontWeight: '500'}}>Preference</Text>
                <View style={{paddingTop: 10,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingBottom: 10}}>
                    <View style={{}}>
                        <Text style={{color: colors.black, fontSize: 18, fontWeight: '500'}}>Privacy</Text>
                        <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400', paddingTop: 6}}>Secure data, Block Users</Text>
                    </View>
                    <ChevronRightIcon size={15} color={colors.lightGray} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingTop: 10,borderColor: colors.white,borderBottomColor: colors.lightGray, borderWidth: 1,}}>
                <Text style={{color: colors.lightGray, fontSize: 15, fontWeight: '500'}}></Text>
                <View style={{paddingTop: 10,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingBottom: 10}}>
                    <View style={{}}>
                        <Text style={{color: colors.black, fontSize: 18, fontWeight: '500'}}>Notification</Text>
                        <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400', paddingTop: 6}}>Notification Settings</Text>
                    </View>
                    <ChevronRightIcon size={15} color={colors.lightGray} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingTop: 10,borderColor: colors.white,borderBottomColor: colors.lightGray, borderWidth: 1,}}>
                <Text style={{color: colors.lightGray, fontSize: 15, fontWeight: '500'}}></Text>
                <View style={{paddingTop: 10,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingBottom: 10}}>
                    <View style={{}}>
                        <Text style={{color: colors.black, fontSize: 18, fontWeight: '500'}}>Photos & Media</Text>
                        <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400', paddingTop: 6}}>Save storage Patt, Optimization</Text>
                    </View>
                    <ChevronRightIcon size={15} color={colors.lightGray} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingTop: 10,borderColor: colors.white,borderBottomColor: colors.lightGray, borderWidth: 1,}}>
                <Text style={{color: colors.lightGray, fontSize: 15, fontWeight: '500'}}></Text>
                <View style={{paddingTop: 10,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingBottom: 10}}>
                    <View style={{}}>
                        <Text style={{color: colors.black, fontSize: 18, fontWeight: '500'}}>Chat</Text>
                        <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400', paddingTop: 6}}>Backup & Restore</Text>
                    </View>
                    <ChevronRightIcon size={15} color={colors.lightGray} />
                </View>
            </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})