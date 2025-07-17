import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Importation correcte du Navigator
import HomeScreen from '../Home'; // Exemple d'écran d'accueil
import Icon from 'react-native-vector-icons/FontAwesome';
import Messages from '../Messages';
import Setting from '../setting';

// Créer le Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63", // Fixe la couleur de l'onglet actif
        tabBarInactiveTintColor: "gray", // Fixe la couleur de l'onglet inactif
        headerShown:false
      }}
    >
      {/* Écran Accueil */}
      <Tab.Screen 
        name="home" 
        component={HomeScreen} 
        options={{ 
          tabBarLabel: 'Dashboard', 
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />  // Icône "home" de FontAwesome
          ), 
        }} 
      />
      
      {/* Écran Notifications Messages */}
      <Tab.Screen 
        name="Messages" 
        component={Messages} 
        options={{ 
          tabBarLabel: 'Messages', // Texte de l'onglet
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment" size={size} color={color} />  // Icône de notification
          ), 
        }} 
      />
      
      {/* Écran parametre Profile */}
      <Tab.Screen 
        name="Setting" 
        component={Setting} 
        options={{ 
          tabBarLabel: 'Parametre', // Texte de l'onglet
          tabBarIcon: ({ color, size }) => (
            <Icon name="cogs" size={size} color={color} />  // Icône de profil
          ), 
        }} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
