import { View, Text, FlatList } from 'react-native'
import React,{useEffect} from 'react'
import { fackConversation } from '../../fakeData/fackConversation';
import Message from '../../componantAd/message';
import MessageInput from '../../componantAd/messageInput';
import { Docteur } from '../../fakeData/fackDocteur';


/// (2) recuperation des info quand j'ai clicqué sur le boutton qui cachait les info$ (2)///
const DocteurDetails = ({route,navigation}) => {
  const {item} = route.params;

  //recuperation lors du chagement de la page
  useEffect(()=>{
    navigation.setOptions({title:item.fullname})
  })

  return (
    <View style={{flex:1}}>
      <FlatList 
      data={Docteur} 
      keyExtractor={item => item.id} 
      renderItem={({item})=>{
        return <Message item={item}/>
      }}/>
      <Text>index{item.id}</Text>
      <MessageInput/>
    </View>
  )
}

export default DocteurDetails