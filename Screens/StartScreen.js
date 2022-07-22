import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import colors from '../assets/colors/colors'
import {ArrowRightIcon} from 'react-native-heroicons/solid'
const StartScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
          // headerTitle: "Testing"
          headerShown: false
        })
      }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row',flex: 1/2, justifyContent: 'center', borderBottomRightRadius: 70, backgroundColor: colors.white}}>
        <Image 
            source={require('../assets/images/7.png')}
            style={{width: 270, height:270}}
        />
      </View>
      <View style={{position: 'absolute',zIndex:-1,top:'50%',backgroundColor: colors.white, flex:1, width:'50%', height:'30%'}}></View>
      <View style={{flex: 1/2, backgroundColor: colors.darkBlue, borderTopLeftRadius: 70}}>
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingHorizontal: 40, marginTop: 40}}>
                <Text style={{color: colors.white, fontSize: 25, fontWeight: '600', flexWrap: 'wrap'}}>Let's connect</Text>
                <Text style={{color: colors.white, fontSize: 25, fontWeight: '600', flexWrap: 'wrap'}}>with each other</Text>
                <Text style={{color: colors.lightGray, fontSize: 14, fontWeight: '400', flexWrap: 'wrap', paddingTop: 10}}>A message is a discrete communication</Text>
                <Text style={{color: colors.lightGray, fontSize: 14, fontWeight: '400', flexWrap: 'wrap', paddingTop: 2}}>intended by the source consumption</Text>
                <TouchableOpacity style={styles.shadow}>
                    <View style={{display: 'flex', flexDirection: 'row', marginTop: 20, alignItems: 'center', backgroundColor: colors.red, paddingHorizontal
                : 22, paddingVertical: 15, borderRadius:15}}>
                        <Text style={{color: colors.white, fontSize: 16, fontWeight:'800', paddingRight: 10}}>Let's Start</Text>
                        <ArrowRightIcon size={18} opacity={0.6} color={colors.white} />
                    </View>
                </TouchableOpacity>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default StartScreen

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