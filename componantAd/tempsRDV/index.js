import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import StyleTemps from './style.js'


const SymptomeItem = ({item}) => {
  return (
    <TouchableOpacity style={StyleTemps.flex}>
        <View style={StyleTemps.item}>
        <Image source={require('./../../assets/imagesTete.png')} style={StyleTemps.itemsImage}/>
        </View>
        <Text style={StyleTemps.itemsText}>{item.libelle}</Text>
    </TouchableOpacity>
    
  )
}

export default SymptomeItem