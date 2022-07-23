import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import PersonRow from './PersonRow'
import colors from '../assets/colors/colors'

const CallComponent = () => {
  return (
    <View style={{flex: 8/10,backgroundColor: colors.white, borderTopRightRadius: 70}}>
    <View style={{paddingTop: 20, paddingHorizontal:15}}>
      <Text style={{color: colors.black, fontSize: 17, fontWeight: '600'}}>My Status</Text>
      <View style={{top: 8}}>
        <TouchableOpacity>
          <PersonRow
            image={sampleData.myStatus.image}
            name={sampleData.myStatus.name}
            description={sampleData.myStatus.description}
            time={sampleData.myStatus.time}
            hasPlusIcon
            // hasBadge
            // badgeCount={6}
          />
        </TouchableOpacity>
      </View>
    </View>

    <View style={{flex: 1,paddingTop: 15, paddingHorizontal:15,}}>
      <Text style={{color: colors.lightGray, fontSize: 13, fontWeight: '400'}}>Friends</Text>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{}}
      >
        {sampleData.friends.map(item=>(
            <TouchableOpacity key={item.id} style={{marginBottom: 4}}>
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
</View>
  )
}

export default CallComponent

const styles = StyleSheet.create({})