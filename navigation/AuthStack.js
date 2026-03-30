import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import IntroScreen from '../screens/auth/IntroScreen';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import ConfirmationCodeScreen from '../screens/auth/ConfirmationCodeScreen';
import ConfirmNewPasswordScreen from '../screens/auth/ConfirmNewPasswordScreen';

const Stack = createStackNavigator();

const AuthStack = ({ onLogin }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
      initialRouteName="Intro"
    >
      <Stack.Screen name="Intro" component={IntroScreen} initialParams={{ onLogin }} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} initialParams={{ onLogin }} />
      <Stack.Screen name="Login" component={LoginScreen} initialParams={{ onLogin }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} initialParams={{ onLogin }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ConfirmationCode" component={ConfirmationCodeScreen} />
      <Stack.Screen name="ConfirmNewPassword" component={ConfirmNewPasswordScreen} initialParams={{ onLogin }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
