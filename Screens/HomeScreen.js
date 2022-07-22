import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import colors from '../assets/colors/colors'
 import {CameraIcon, SearchIcon} from 'react-native-heroicons/outline'
const HomeScreen = ({ navigation }) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Testing"
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' ,paddingHorizontal: 8}}>
          <CameraIcon size={25} opacity={0.8} color={colors.white} />
          <Text style={{fontSize: 25, fontWeight: 'bold', color: colors.white, flex: 1, textAlign: 'center'}}>Modychat</Text>
          <SearchIcon size={25} opacity={0.8} color={colors.white} />
        </View>

        <View>
          <TouchableOpacity>
            <Text>Chats</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}


export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
})