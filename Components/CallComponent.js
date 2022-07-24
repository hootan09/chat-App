import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import PersonRow from './PersonRow'
import colors from '../assets/colors/colors'
import {AdjustmentsIcon, ChevronRightIcon, MailIcon, PhoneIcon, PhoneMissedCallIcon, PhoneOutgoingIcon} from 'react-native-heroicons/outline'
import sampleData from '../assets/data/sampleData'
import { useNavigation } from '@react-navigation/native'
const CallComponent = () => {
  const navigation = useNavigation()

  let top3Friends = [...sampleData.friends].slice(0,3)

  return (
    <View style={{flex: 13/16,backgroundColor: colors.white, borderTopRightRadius: 70}}>
    <View style={{paddingTop: 25, paddingHorizontal:15}}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:  'space-between',}}>
        <Text style={{color: colors.black, fontSize: 17, fontWeight: '600'}}>All Calls</Text>
        
        {/* Settings Button */}
        <TouchableOpacity onPress={()=> navigation.navigate('SettingsScreen')}>
          <AdjustmentsIcon size={20} color={colors.black}/>
        </TouchableOpacity>
      </View>
    </View>

    <View style={{flex: 1,paddingTop: 5, paddingHorizontal:15,}}>
      <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400'}}>Friends</Text>
      {top3Friends.map(item=>(
          <TouchableOpacity onPress={()=> navigation.navigate('CallScreen', {call: item})} key={item.id} style={{}}>
            <PersonRow
              image={item.image}
              name={item.name}
              description={item.description}
              // time={item.time}
              // badgeCount={item.badgeCount}
              callType={item.callType}
            />
          </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center',marginTop: 8}}
      >
        <Text style={{color: colors.red, fontSize: 13, fontWeight: '500'}}>See more</Text>
        <ChevronRightIcon size={15} color={colors.red} />
      </TouchableOpacity>
    </View>

    <View style={{flex: 1,paddingTop: 30, paddingHorizontal:15,}}>
      <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400',marginBottom: 5}}>Group Message</Text>
      {sampleData.groupMessage.map(item=>(
          <TouchableOpacity onPress={()=> navigation.navigate('CallScreen', {call: item})} key={item.id} style={{}}>
            <PersonRow
              image={item.image}
              name={item.name}
              description={item.description}
              // time={item.time}
              // hasBadge
              // badgeCount={item.badgeCount}
              callType={item.callType}
            />
          </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center',marginTop: 8}}
      >
        <Text style={{color: colors.red, fontSize: 13, fontWeight: '500'}}>See more</Text>
        <ChevronRightIcon size={15} color={colors.red} />
      </TouchableOpacity>

    </View>

    <TouchableOpacity>
      <View style={{opacity: 0.85,position:'absolute', bottom: 10, right:3 ,backgroundColor: colors.red, padding: 10, borderRadius: 10, marginRight: 7}}>
        <PhoneIcon size={22} color={colors.white} />
      </View>
    </TouchableOpacity>

</View>
  )
}

export default CallComponent

const styles = StyleSheet.create({})