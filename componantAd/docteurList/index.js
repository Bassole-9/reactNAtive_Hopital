import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const ListDocteur = ({item,navigation})=>{
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('DetailsDocteur',{item})}>
            <View >
                <Image src={{uri:`${item.img}`}}/>
                    <Text>{item.fulname}</Text>
                    <Text>{item.speciality}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ListDocteur