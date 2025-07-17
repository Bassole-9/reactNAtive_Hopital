import { View, Text, TouchableOpacity,Image,navigate } from 'react-native'
import React from 'react'
import Style from './style'

//convertire format de l'heure
import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


///(1.5) composant boutton je vais clicqué pour ouvrir les données cachet dans le boutton  (1.5)///
const Message = ({item, navigation}) => {
  return (
    <TouchableOpacity style={Style.messageContainer} onPress={()=>navigation.navigate ('MessageDetails',{item})}>
      <Image 
      source={{uri:'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={Style.messageImg}/>
      <View style ={Style.messageInfo}>
          <View style={Style.date_name}>
            <Text style={Style.name}>{item.fullname}</Text>
            <Text >{dayjs(item.date).fromNow(true)}</Text>
          </View>
          <Text>{item.last_message}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Message