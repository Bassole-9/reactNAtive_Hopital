import React from 'react';
import { View, Text, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import dashboardStyles from './style.js';
import FackeActivity from '../../fakeData/fackactivitie.js';
import ActivityItem from '../../componantAd/ActivityItem/index.js';
import SymptomeItem from '../../componantAd/symptomeItem/index.js';
import { FackSymptome } from '../../fakeData/fackSymptome.js';
import { Docteur } from '../../fakeData/fackDocteur.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import TempsRdv from '../../componantAd/tempsRDV/index.js';
// import ListDocteur from '../../componantAd/docteurList/index.js';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  // const SupphandleStart = async () => {
  //       await AsyncStorage.removeItem('hasSeenWelcome');
  //   };


  return (
    <ScrollView>
      {/* debut du Header */}
      <View style={dashboardStyles.header}>
      <Text style={dashboardStyles.userName}>Bassole</Text>
      {/* <Button title="revenir initial" onPress={SupphandleStart}/> */}
      <Text style={dashboardStyles.userFont}>
          HOSPITAL SERVICES
      </Text>
      <Image source={require('../../assets/femme.jpg')} style={dashboardStyles.userImg}/>
      </View>
     {/* fin du Header */}

     {/* intro et bar de reche */}
     <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.userSize}>Bienvenue sur l'application de l'Hopital cycatrique </Text>
     </View>
     <View style={dashboardStyles.ContainerInput}>
        <Icon name="search" style={dashboardStyles.IconAbsolu} size={22}/> 
        <TextInput style={dashboardStyles.input} placeholder='Recherche de Medecin'></TextInput>
     </View>
     <FlatList 
     data={FackSymptome} 
     keyExtractor={item => item.id} 
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     style={dashboardStyles.scrollableList}
     renderItem={({item}) => {
      return <TempsRdv item={item}/>
    }}/>
    {/* Fin intro et bar de reche */}

    <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.userSize}>Esposition</Text>
     </View>

     {/* liste des activité scrolle de la gauche vers la droit : //maper//*/}
     <FlatList 
     data={FackeActivity} 
     keyExtractor={item => item.id} 
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     style={dashboardStyles.scrollableList}
     renderItem={({item}) => {
      return <ActivityItem item={item}/>
    }}
     />
     {/* fin de liste des activité */}


     {/* Liste des symptome */}
     <View style={dashboardStyles.title}>
        <Text style={dashboardStyles.titleBold}>quel symptome avez vous ?</Text>
     </View>

     <FlatList 
     data={FackSymptome} 
     keyExtractor={item => item.id} 
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     style={dashboardStyles.scrollableList}
     renderItem={({item}) => {
      return <SymptomeItem item={item}/>
      }}/>
     {/* Fin Liste des symptome */}

     {/* Liste des docteur*/}
     <View style={dashboardStyles.title_space_between}>
        <Text style={dashboardStyles.titleBold}>Nos Docteurs</Text>
        <TouchableOpacity>
          <Text style={dashboardStyles.link}>Afficher</Text>
        </TouchableOpacity>
     </View>
     {/* <FlatList
     data={Docteur}
     keyExtractor={item => item.id}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     style={dashboardStyles.scrollableList}
     renderItem={({item})=>{
      return <ListDocteur item={item} navigation={navigation}/>
     }}/> */}
     <View style={dashboardStyles.docteurContainer}>
        {Docteur.splice(0,4).map((Doctor,index)=>{
          return(
            <TouchableOpacity key={Doctor.id} style={dashboardStyles.DocteurCarte}>
                <Image source={{uri:`${Doctor.img}`}} style={dashboardStyles.DocteurImg}/>
                <View style={dashboardStyles.DocteurInfo}>
                  <Text style={dashboardStyles.DocteurName}>{Doctor.fulname}</Text>
                  <Text style={dashboardStyles.DocteurSpecialite}>{Doctor.speciality}</Text>   
                </View> 
            </TouchableOpacity>
          )
         })
        }
     </View>
    </ScrollView>
  );
};

export default HomeScreen;
