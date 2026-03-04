import 'react-native-get-random-values';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { useJobStore } from './src/store/useJobStore';

export default function App() {
  const { isDarkMode } = useJobStore();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar 
          barStyle={isDarkMode ? "light-content" : "dark-content"} 
          backgroundColor={isDarkMode ? "#020617" : "#FFFFFF"}
        />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}