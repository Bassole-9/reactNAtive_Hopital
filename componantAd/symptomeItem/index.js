import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Style from './style.js'


const SymptomeItem = ({item}) => {
  return (
    <TouchableOpacity style={Style.item}>
        <View style={Style.item}>
        <Image source={require('./../../assets/imagesTete.png')} style={Style.itemsImage}/>
        <Text style={Style.colorItem}>{item.libelle}</Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default SymptomeItem