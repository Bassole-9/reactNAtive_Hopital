import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { fackChats } from '../../fakeData/fachChat'
import Message from '../../componantAd/messageList'
import Styles from './style'


///(1) afficher tous les bouttons cliquable sur ecrant de Messages (1) ///
const Messages = ({navigation}) => {
  return (
    <FlatList 
    data={fackChats} 
    keyExtractor={item=>item.id}
    showsVerticalScrollIndicator={false}
    style={Styles.root}
    renderItem={({item})=>{
      return <Message item={item} navigation={navigation}/>
    }}/>
  )
}

export default Messages