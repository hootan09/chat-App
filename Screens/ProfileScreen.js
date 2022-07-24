import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import {ChevronLeftIcon, PencilAltIcon} from 'react-native-heroicons/outline'
import { useRoute } from '@react-navigation/native'
const ProfileScreen = ({navigation}) => {
    const {params: {myStatus}} = useRoute();

  return (
<SafeAreaView style={styles.container}>
    {/* Top View */}
    <View style={{flex: 1/2, borderBottomLeftRadius: 70, backgroundColor: colors.darkBlue}}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 15}}>
            <TouchableOpacity
               onPress={()=>navigation.goBack()}
            >
               <ChevronLeftIcon size={22} color={colors.lightGray}/>
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center', alignSelf: 'center'}}>
               <Text style={{fontSize: 20, fontWeight: '500', color: colors.white}}>Profile</Text>
            </View>
            <TouchableOpacity>
               <PencilAltIcon size={22} color={colors.lightGray}/>
            </TouchableOpacity>
        </View>
        <Image 
            source={myStatus.image}
            style={{width:98, height:98, alignSelf: 'center', marginTop: '10%'}}
        />
        <View style={{flex:1, alignItems: 'center', marginTop: 1}}>
            <Text style={{color: colors.white, fontSize:18, fontWeight: '600'}}>{myStatus.name}</Text>
            <Text style={{color: colors.white, fontSize:12, fontWeight: '400'}}>Active Now</Text>
        </View>
        <View style={{display: 'flex',flex:1, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{alignItems: 'center', paddingHorizontal: 15}}>
                <Text style={{color: colors.white, fontSize:12, fontWeight: '600', opacity: 0.75}}>Total Connected</Text>
                <Text style={{color: colors.red, fontSize:18, fontWeight: '800'}}>250+</Text>
            </View>
            <View style={{alignItems: 'center', paddingHorizontal: 15}}>
                <Text style={{color: colors.white, fontSize:12, fontWeight: '600', opacity: 0.75}}>Recently Connected</Text>
                <Text style={{color: colors.red, fontSize:18, fontWeight: '800'}}>85</Text>
            </View>
        </View>
    </View>
      
    <View style={{position: 'absolute',zIndex:-1,top:'35%',backgroundColor: colors.white, flex:1, width:'50%', height:'30%'}}></View>
      
    {/* Bottom View */}
    <View style={{flex: 1/2, backgroundColor: colors.white, borderTopRightRadius: 70}}>
        <View style={{flexDirection: 'row',paddingHorizontal: 20, marginTop: 20,alignItems: 'center' ,justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{color: colors.darkGray, fontSize: 12, fontWeight: '600', opacity: 0.8, paddingTop: 5}}>Phone Number</Text>
                <Text style={{color: colors.darkViolet, fontSize: 15, fontWeight: '900', paddingTop: 5}}>+99 0258 3694 222</Text>
            </View>
            <TouchableOpacity>
            <Text style={{color: colors.red, fontSize: 12, fontWeight: '600', opacity: 0.85}}>Change Number</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',paddingHorizontal: 20, marginTop: 20,alignItems: 'center' ,justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{color: colors.darkGray, fontSize: 12, fontWeight: '600', opacity: 0.8, paddingTop: 5}}>Email Address</Text>
                <Text style={{color: colors.darkViolet, fontSize: 15, fontWeight: '900', paddingTop: 5}}>hootan09@Gmail.com</Text>
            </View>
            <TouchableOpacity>
            <Text style={{color: colors.red, fontSize: 12, fontWeight: '600', opacity: 0.85}}>Change email</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',paddingHorizontal: 20, marginTop: 20,alignItems: 'center' ,justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{color: colors.darkGray, fontSize: 12, fontWeight: '600', opacity: 0.8, paddingTop: 5}}>Status</Text>
                <Text style={{color: colors.darkViolet, fontSize: 15, fontWeight: '900', paddingTop: 5}}>Busy</Text>
            </View>
            <TouchableOpacity>
            <Text style={{color: colors.red, fontSize: 12, fontWeight: '600', opacity: 0.85}}>Change status</Text>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',paddingHorizontal: 20, marginTop: 20,alignItems: 'center' ,justifyContent: 'space-between'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{color: colors.darkGray, fontSize: 12, fontWeight: '600', opacity: 0.8, paddingTop: 5}}>Other Stuff</Text>
                <Text style={{color: colors.darkViolet, fontSize: 15, fontWeight: '900', paddingTop: 5}}>Unknown</Text>
            </View>
            <TouchableOpacity>
            <Text style={{color: colors.red, fontSize: 12, fontWeight: '600', opacity: 0.85}}>Change</Text>
            </TouchableOpacity>
        </View>


    </View>
</SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        // marginTop: 10,
        backgroundColor: colors.darkBlue
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    }
})