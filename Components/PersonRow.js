import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors'
import {PlusIcon} from 'react-native-heroicons/solid'
const PersonRow = ({image,name,description,time,hasBadge = false,badgeCount = 0,hasPlusIcon= false}) => {
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 1}}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <View style={{position: 'relative'}}>
                <Image 
                    source={image}
                    style={{width: 54, height: 54, borderRadius: 30}}
                />
                { hasPlusIcon && (
                        <Text style={{position: 'absolute',right:0,bottom: 0,textAlign: 'center' ,backgroundColor: colors.red,color: colors.white ,fontSize: 10, fontWeight: '400',borderRadius: 4, padding: 3,paddingHorizontal: 5}}>+</Text>
                    )}
                { hasBadge && (
                        <Text style={{position: 'absolute',right:-3,top: -3,textAlign: 'center' ,backgroundColor: colors.red,color: colors.white ,fontSize: 10, fontWeight: '400',borderRadius: 10, padding: 3,paddingHorizontal: 5}}>{badgeCount.toString()}</Text>
                )}
            </View>
            <View style={{marginLeft: 5}}>
                <Text style={{color:colors.black, fontSize:13, fontWeight: '600'}}>{name}</Text>
                <Text style={{color:colors.darkGray, fontSize:10, fontWeight: '400', top: 3}}>{description}</Text>
            </View>
        </View>
      <Text style={{fontSize: 12, fontWeight:"700"}}>{time}</Text>
    </View>
  )
}

export default PersonRow

const styles = StyleSheet.create({})