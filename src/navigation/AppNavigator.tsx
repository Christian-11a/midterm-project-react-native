import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useJobStore } from '../store/useJobStore';
import { RootStackParamList } from '../types';

import JobFinderScreen from '../screens/JobFinder/JobFinderScreen';
import JobDetailsScreen from '../screens/JobDetails/JobDetailsScreen';
import SavedJobsScreen from '../screens/SavedJobs/SavedJobsScreen';
import AppliedHistoryScreen from '../screens/AppliedHistory/AppliedHistoryScreen';
import ApplicationFormScreen from '../screens/ApplicationForm/ApplicationFormScreen';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainStack() {
  const { isDarkMode } = useJobStore();
  
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { 
          backgroundColor: isDarkMode ? '#020617' : '#FFFFFF',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: isDarkMode ? '#FFFFFF' : '#0F172A',
        headerTitleStyle: { fontWeight: 'bold' },
        // FIX: Removed 'headerBackTitleVisible' as it's not in RN7 Stack types.
        // Using headerBackTitle: '' instead to hide the text next to back arrow.
        headerBackTitle: '', 
      }}
    >
      <Stack.Screen 
        name="JobFinder" 
        component={JobFinderScreen} 
        options={{ title: 'Job Finder' }} 
      />
      <Stack.Screen 
        name="JobDetails" 
        component={JobDetailsScreen} 
        options={{ title: 'Details' }} 
      />
      <Stack.Screen 
        name="ApplicationForm" 
        component={ApplicationFormScreen} 
        options={{ title: 'Apply' }} 
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const { isDarkMode } = useJobStore();
  
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: isDarkMode ? '#020617' : '#FFFFFF', 
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 10
        },
        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: '#64748B',
      }}
    >
      <Tab.Screen name="Search" component={MainStack} />
      <Tab.Screen name="Saved" component={SavedJobsScreen} />
      <Tab.Screen name="History" component={AppliedHistoryScreen} />
    </Tab.Navigator>
  );
}