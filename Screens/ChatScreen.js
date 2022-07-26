import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {ChevronLeftIcon, MicrophoneIcon, PhoneIcon, VideoCameraIcon, XIcon} from 'react-native-heroicons/outline'
import colors from '../assets/colors/colors'
import { useRoute } from '@react-navigation/native'

const ChatScreen = ({navigation}) => {
  const {params: {chat}} = useRoute();
  return (
  <SafeAreaView style={styles.container}>
    <View style={{flex: 14/16, borderBottomRightRadius: 40, backgroundColor: colors.white, overflow:'hidden'}}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginTop: 15, paddingHorizontal: 15,}}>
        <TouchableOpacity
          onPress={()=>navigation.goBack()}
        >
          <ChevronLeftIcon size={22} color={colors.darkGray}/>
        </TouchableOpacity>
      </View>

      <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderColor: colors.white, borderBottomColor: colors.gray, borderWidth:1}}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, paddingHorizontal: 10}}>
          <Image
           source={chat.image}
           style={{width: 50, height: 50, borderRadius: 30}}
          />
            <View style={{marginLeft: 5}}>
                <Text style={{color:colors.black, fontSize:15, fontWeight: '600'}}>{chat.name}</Text>
                <Text style={{color:colors.darkGray, fontSize:12, fontWeight: '400', top: 3}}>Last Seen {chat.description}</Text>
            </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row',alignItems: 'center', paddingHorizontal: 20, paddingTop: '5%'}}>
          
          <TouchableOpacity>
             <VideoCameraIcon size={25} color={colors.lightGray} style={{marginHorizontal: 10}}  />
          </TouchableOpacity>
          
          <TouchableOpacity>
              <PhoneIcon size={25} color={colors.lightGray} style={{marginHorizontal: 10}} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{paddingBottom: 20}}
       style={{marginHorizontal: 10, paddingBottom: 30}}
      >
        <View style={{marginTop: 15, flex:1, alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '500', color: colors.lightGray}}>8:25 Wednesday</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, marginRight: '35%', marginTop: 20}}>
          <Image source={chat.image} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
          <View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>Hello ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>A classic smiley. A yellow face with a modest smile, rosy cheeks, and soft, closed eyes. Many platforms,</Text>
              </View>
          </View>
        </View>

        <View style={{marginTop: 10, flex:1, alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '500', color: colors.lightGray}}>3:30 Today</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10, marginLeft: '35%', marginTop: 20}}>
          <View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>hi {chat.name} ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>This smiley predates Unicode emoji support. In its Unicode name of White Smiling Face, white does not refer to skin tone or ethnicity</Text>
              </View>
          </View>
          <Image source={require('../assets/images/1.png')} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, marginRight: '35%', marginTop: 20}}>
          <Image source={chat.image} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
          <View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>Hello ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>A classic smiley. A yellow face with a modest smile, rosy cheeks, and soft, closed eyes. Many platforms,</Text>
              </View>
          </View>
        </View>

        <View style={{marginTop: 10, flex:1, alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '500', color: colors.lightGray}}>3:30 Today</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10, marginLeft: '35%', marginTop: 20}}>
          <View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>hi {chat.name} ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>This smiley predates Unicode emoji support. In its Unicode name of White Smiling Face, white does not refer to skin tone or ethnicity</Text>
              </View>
          </View>
          <Image source={require('../assets/images/1.png')} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, marginRight: '35%', marginTop: 20}}>
          <Image source={chat.image} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
          <View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>Hello ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>A classic smiley. A yellow face with a modest smile, rosy cheeks, and soft, closed eyes. Many platforms,</Text>
              </View>
          </View>
        </View>

        <View style={{marginTop: 10, flex:1, alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '500', color: colors.lightGray}}>3:30 Today</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10, marginLeft: '35%', marginTop: 20}}>
          <View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>hi {chat.name} ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>This smiley predates Unicode emoji support. In its Unicode name of White Smiling Face, white does not refer to skin tone or ethnicity</Text>
              </View>
          </View>
          <Image source={require('../assets/images/1.png')} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 10, marginRight: '35%', marginTop: 20}}>
          <Image source={chat.image} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
          <View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>Hello ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.gray,margin: 2,borderRadius: 15, alignSelf:'flex-start'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.darkViolet}}>A classic smiley. A yellow face with a modest smile, rosy cheeks, and soft, closed eyes. Many platforms,</Text>
              </View>
          </View>
        </View>

        <View style={{marginTop: 10, flex:1, alignItems: 'center'}}>
          <Text style={{fontSize: 13, fontWeight: '500', color: colors.lightGray}}>3:30 Today</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', paddingHorizontal: 10, marginLeft: '35%', marginTop: 20}}>
          <View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>hi {chat.name} ☺️</Text>
              </View>
              <View style={{padding: 15, backgroundColor: colors.red,margin: 2,borderRadius: 15, alignSelf:'flex-end'}}>
                <Text style={{fontSize: 12, fontWeight: '500', flexWrap: 'wrap', color: colors.white}}>This smiley predates Unicode emoji support. In its Unicode name of White Smiling Face, white does not refer to skin tone or ethnicity</Text>
              </View>
          </View>
          <Image source={require('../assets/images/1.png')} style={{width: 30, height: 30, borderRadius: 30,alignSelf: 'flex-end',marginRight: 5}} />
        </View>

      </ScrollView>
    </View>

    <View style={{position: 'absolute',width: '30%', height: '30%', backgroundColor: colors.darkBlue, bottom: 0, right: 0, zIndex: -1}}></View>

    <View style={{flex: 2/16, backgroundColor: colors.darkBlue, borderTopLeftRadius: 70}}>
    
        <View style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 15, marginLeft: 30}}>
          <TouchableOpacity style={{backgroundColor: colors.gray, padding: 8, borderRadius: 10, marginHorizontal:5}}>
            <XIcon size={22} color={colors.red}/>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: colors.gray, padding: 8, borderRadius: 10, marginHorizontal:5}}>
            <MicrophoneIcon size={22} color={colors.lightGray} />
          </TouchableOpacity>

          <TextInput placeholder='write a message' placeholderTextColor={colors.darkViolet} keyboardType='default' style={{color: colors.darkViolet, backgroundColor: colors.gray, flex:1, marginHorizontal:20, padding:5, borderRadius:8, paddingHorizontal:10}} />
       </View>
    </View>
      
  </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
    backgroundColor: colors.white,
  }
})