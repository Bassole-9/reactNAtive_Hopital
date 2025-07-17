import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../../outilsAnd/constants.js';
import Style from './style.js'

const SettinItem = ({item}) => {
  return (
    <TouchableOpacity style={Style.Container}>
        <Text>{item.libelle}</Text>
        <Icon name="arrow-right" color={COLORS.main} size={22} onPress={() => console.log('Arrow clicked!')} />
    </TouchableOpacity>
  )
}

export default SettinItem