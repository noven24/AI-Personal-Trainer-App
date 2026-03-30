import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CustomBottomTabBar from '../components/CustomBottomTabBar';
import HomeScreen from '../screens/main/HomeScreen';
import WorkoutScreen from '../screens/main/WorkoutScreen';
import GymCommunityScreen from '../screens/main/GymCommunityScreen';
import ProfileScreen from '../screens/main/ProfileScreen';

import AITrainerScreen from '../screens/main/AITrainerScreen';
import CommentDetailScreen from '../screens/main/CommentDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
  </Stack.Navigator>
);

const GymCommunityStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="GymCommunityMain" component={GymCommunityScreen} />
    <Stack.Screen name="CommentDetail" component={CommentDetailScreen} />
  </Stack.Navigator>
);

const MainTabNavigator = ({ onLogout }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
    >
      <Tab.Screen name="Beranda" component={HomeStack} />
      <Tab.Screen name="Latihan" component={WorkoutScreen} />
      <Tab.Screen 
        name="AITrainer" 
        component={AITrainerScreen} 
        options={{ tabBarLabel: 'AI Trainer' }} 
      />
      <Tab.Screen 
        name="GymCommunity" 
        component={GymCommunityStack} 
        options={{ tabBarLabel: 'Komunitas' }} 
      />
      <Tab.Screen 
        name="Profil" 
        component={ProfileScreen} 
        initialParams={{ onLogout }} 
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
