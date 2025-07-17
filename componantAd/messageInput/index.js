import { View, Text } from 'react-native'
import React from 'react'
import Styles from './style'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';


const MessageInput = () => {
  return (
    <View style={Styles.ContainerInput}>
      <TextInput style={Styles.input} placeholder='entrez vorte message'></TextInput>
      <Icon name="send" style={Styles.send} size={22}/> 
    </View>
  )
}

export default MessageInput