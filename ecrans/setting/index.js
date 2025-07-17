import { View, Text, Image, FlatList} from 'react-native'
import React from 'react'
import Style from './style'
import { FackSetting } from '../../fakeData/fackSetting'
import SettinItem from '../../componantAd/settingItem'




const Setting = () => {
  return (
    <View style={Style.containerSet}>

      {/* Header */}
      <View style={Style.header}>
        <Image style={Style.image} source={require('./../../assets/imagesTete.png')}/>
        <View style={Style.userInfo}>
          <Text style={Style.userName}>Tech</Text>
          <Text>Tech@Gmail.com</Text>
          <Text Style={Style.userNum}>0142448765</Text>
        </View>
      </View>
      {/* fin du Header */}


      {/* body */}
      <View>
        <FlatList 
        data={FackSetting} 
        keyExtractor={item => item} 
        renderItem={({item})=>{
          return <SettinItem item={item}/>
        }}/>
      </View>
      {/* fin de body */}
  
    </View>
  )
}

export default Setting