import { View, Text } from 'react-native'
import React from 'react'
import Style from './style'


///(2.5)composant de tous les message reçu de chaque docteur (2.5)///

const Message = ({item}) => {
    //determine si c'est mon message
    const isMine =()=>{
        return item.user.id === 1
    }

  return (
    <View 
    style={[Style.container,
    {backgroundColor:isMine() ? "#DCF8C5":"white",
    alignSelf: isMine() ? 'flex-end': 'flex-start'
    }
    ]}>
      <Text>{item.message}</Text>
      <Text style={Style.minutes}>{item.date}</Text>
    </View>
  )
}

export default Message