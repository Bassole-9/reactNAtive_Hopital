import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import SVG_HOSPITAL from './../../assets/images/undraw_listening-to-podcasts_j0hm'
import style from './style'

const ActivityItem = ({item}) => {
  return (
        <TouchableOpacity style={style.scrollableItem}>
          <SVG_HOSPITAL width={40} heigth={48}style={style.svgStyle}/>
          <View style={style.svgStyles}>
            <Text style={style.mainText}>{item.mainText}</Text>
            <Text style={style.subText}>{item.subText}</Text>
          </View>
          
        </TouchableOpacity>
  )
}

export default ActivityItem 