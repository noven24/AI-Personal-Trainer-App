import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import CustomBottomTabBar from '../components/CustomBottomTabBar';

import HomeScreen from '../screens/main/HomeScreen';
import WorkoutScreen from '../screens/main/WorkoutScreen';
import GymCommunityScreen from '../screens/main/GymCommunityScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import AITrainerScreen from '../screens/main/AITrainerScreen';
import VideoPlayerScreen from '../screens/main/VideoPlayerScreen';
import CommentDetailScreen from '../screens/main/CommentDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeMain" component={HomeScreen} />
    <Stack.Screen name="AITrainer" component={AITrainerScreen} />
    <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
  </Stack.Navigator>
);

const GymCommunityStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="GymCommunityMain" component={GymCommunityScreen} />
    <Stack.Screen name="CommentDetail" component={CommentDetailScreen} />
  </Stack.Navigator>
);

const BottomTabNavigator = ({ onLogout }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Workout" component={WorkoutScreen} />
      <Tab.Screen name="GymCommunity" component={GymCommunityStack} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ onLogout }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
