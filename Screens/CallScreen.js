import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import colors from '../assets/colors/colors';
import {ChevronLeftIcon, DotsVerticalIcon, MicrophoneIcon, PhoneIcon, VideoCameraIcon} from 'react-native-heroicons/outline'
const CallScreen = ({navigation}) => {
  const {params: {call}} = useRoute();
  return (
    <SafeAreaView>
      <View style={{marginTop: 20,paddingHorizontal: 20,display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <ChevronLeftIcon size={22} color={colors.lightGray} />
        </TouchableOpacity>

        <TouchableOpacity>
          <DotsVerticalIcon size={22} color={colors.lightGray} />
        </TouchableOpacity>
      </View>

      <View style={[{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '8%'}, styles.shadow]}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',backgroundColor: '#f4dfcc', width: 250, height: 250, borderRadius: 150,}}>
          <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent:'center', alignSelf: 'center',backgroundColor: '#e6b9a8', width: 200, height: 200, borderRadius: 100}}>
          <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent:'center', alignSelf: 'center',backgroundColor: '#ffa684', width: 150, height: 150,borderColor: colors.red ,borderRadius: 100}}>
          <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent:'center', alignSelf: 'center',backgroundColor: '#f99067', width: 140, height: 140,borderColor: colors.red ,borderRadius: 100}}>
            <Image
              source={call.image}
              style={{width: 120, height:120}}
            />
          </View>
          </View>
          </View>
        </View>
      </View>

      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
        <Text style={{color: colors.black, fontSize:25, fontWeight: '800'}}>{call.name}</Text>
        <Text style={{color: colors.lightGray, fontSize: 18, fontWeight: '600'}}>Ringing...</Text>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around',marginTop: 30}}>
        <TouchableOpacity style={[{padding: 25, marginHorizontal:15, borderRadius: 60, backgroundColor: colors.darkBlue}, styles.shadow]} >
          <VideoCameraIcon size={30} color={colors.white} opacity={0.8}/>
        </TouchableOpacity>

        <TouchableOpacity style={[{padding: 30, marginHorizontal:15, borderRadius: 60, backgroundColor: '#ea5c64'}, styles.shadow]}>
          <PhoneIcon size={40} color={colors.white} opacity={0.8} />  
        </TouchableOpacity>

        <TouchableOpacity style={[{padding: 25, marginHorizontal:15, borderRadius: 60, backgroundColor: '#f94f64'}, styles.shadow]} >
          <MicrophoneIcon size={30} color={colors.white} opacity={0.8}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default CallScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.white
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