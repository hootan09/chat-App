import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import colors from '../assets/colors/colors'
 import {CameraIcon, SearchIcon} from 'react-native-heroicons/outline'
import PersonRow from '../Components/PersonRow'
import sampleData from '../assets/data/sampleData'
import StatusComponent from '../Components/StatusComponent'
import ChatComponent from '../Components/ChatComponent'
import CallComponent from '../Components/CallComponent'

const HomeScreen = ({ navigation }) => {

  const [selectedComponent, setSelectedComponent] = useState('status');


  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Testing"
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{flex: 2/10,backgroundColor: colors.darkBlue, paddingVertical: 20, borderBottomLeftRadius: 70}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' ,paddingHorizontal: 8}}>
          <CameraIcon size={22} opacity={0.8} color={colors.white} />
          <Text style={{fontSize: 18, fontWeight: '600', color: colors.white, flex: 1, textAlign: 'center'}}>Modychat</Text>
          <SearchIcon size={22} opacity={0.8} color={colors.white} />
        </View>

        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: '10%', marginTop: 15, backgroundColor: colors.darkViolet, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 10}}>
          <TouchableOpacity
            onPress={()=> setSelectedComponent('chat')}
            style={{backgroundColor: selectedComponent == 'chat' ? colors.darkBlue : colors.darkViolet, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 6}}>
            <Text style={{color: colors.white, fontSize: 13, fontWeight: '500'}}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=> setSelectedComponent('status')}
            style={{backgroundColor: selectedComponent == 'status' ? colors.darkBlue : colors.darkViolet, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 6}}>
            <Text style={{color: colors.white, fontSize: 13, fontWeight: '500'}}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={()=> setSelectedComponent('call')}
            style={{backgroundColor: selectedComponent == 'call' ? colors.darkBlue : colors.darkViolet, paddingHorizontal: 20, paddingVertical: 8, borderRadius: 6}}>
            <Text style={{color: colors.white, fontSize: 13, fontWeight: '500'}}>Calls</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={{position: 'absolute', zIndex:-1, width: '50%',height: '30%', backgroundColor: colors.white}}></View>

        
      {selectedComponent == 'status' && <StatusComponent/>}
      {selectedComponent == 'chat' && <ChatComponent/>}
      {selectedComponent == 'call' && <CallComponent/>}


    </SafeAreaView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
})