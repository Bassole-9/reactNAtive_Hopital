import React from 'react';
import { View, Text ,Button, Image} from 'react-native';
import Styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';


const WelcomeScreen = ({navigation})=>{

     const handleStart = async () => {
        await AsyncStorage.setItem('hasSeenWelcome', 'true');
        navigation.replace('Home');
    };


    return(
        <View style={Styles.container}>
            <Image source={require(`../../assets/doc.png`)} style={Styles.image}/>
            <Text style={Styles.title}>Medecin ProActive</Text>
            <Text style={Styles.titleMini}>Votre santé, notre priorité</Text>
            <Button title="Commencer"onPress={handleStart}/>
        </View>
    )
}
export default WelcomeScreen;