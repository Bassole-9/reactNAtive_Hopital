import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BottomTabs from '../ecrans/tabs';
import DetailMessage from '../ecrans/DetailsMessage';
import DocteurDetails from '../ecrans/DetailsDocteur';
import WelcomeScreen from '../ecrans/welcomeScreen';
import LoadingScreen from '../ecrans/LoadingScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);

  useEffect(() => {
    const checkWelcome = async () => {
      try {
        const value = await AsyncStorage.getItem('hasSeenWelcome');
        setHasSeenWelcome(value === 'true');
      } catch (error) {
        console.error('Erreur lors de la lecture de AsyncStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };
    checkWelcome();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasSeenWelcome ? 'Home' : 'Welcome'}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="MessageDetails" component={DetailMessage} options={{ headerShown: true }} />
        <Stack.Screen name="DocteurDetails" component={DocteurDetails} options={{ headerShown: true }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
