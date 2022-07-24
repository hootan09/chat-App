import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PersonRow from './PersonRow'
import colors from '../assets/colors/colors'
import {CameraIcon, PencilIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import sampleData from '../assets/data/sampleData'
const StatusComponent = () => {

  const navigation = useNavigation()

  return (
    <View style={{flex: 13/16,backgroundColor: colors.white, borderTopRightRadius: 70}}>
          <View style={{paddingTop: 10, paddingHorizontal:15}}>
            <Text style={{color: colors.black, fontSize: 17, fontWeight: '600'}}>My Status</Text>
            <View style={{top: 8}}>
              {/* Profile button */}
              <TouchableOpacity onPress={()=> navigation.navigate('ProfileScreen', {myStatus: sampleData.myStatus})}>
                <PersonRow
                  image={sampleData.myStatus.image}
                  name={sampleData.myStatus.name}
                  description={sampleData.myStatus.description}
                  time={sampleData.myStatus.time}
                  hasPlusIcon
                  // badgeCount={6}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flex: 1,paddingTop: 15, paddingHorizontal:15}}>
            <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400'}}>Friends</Text>
            <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 70}}
            >
              {sampleData.friends.map(item=>(
                  <TouchableOpacity onPress={()=> navigation.navigate('ProfileScreen', {myStatus: item})} key={item.id} style={{marginBottom: 4}}>
                    <PersonRow
                      image={item.image}
                      name={item.name}
                      description={item.description}
                      time={item.time}
                    />
                  </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Bottom nav */}
          <View style={{opacity: 0.85,position: 'absolute',width: '100%', bottom: 0,backgroundColor: colors.white}}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'flex-end', marginRight: 5, paddingVertical:10}}>
                <TouchableOpacity>
                    <View style={[{padding: 10, backgroundColor: colors.darkBlue, borderRadius: 10, marginHorizontal:7}, styles.shadow]}>
                        <PencilIcon color={colors.white} size={22}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[{padding: 10, backgroundColor: colors.red, borderRadius: 10, marginHorizontal: 7}, styles.shadow]}>
                        <CameraIcon color={colors.white} size={22}/>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
      </View>
  )
}

export default StatusComponent

const styles = StyleSheet.create({
    shadowColor: colors.red,
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
})