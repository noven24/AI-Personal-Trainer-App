import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import AuthStack from './navigation/AuthStack';
import BottomTabNavigator from './navigation/BottomTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  // Simple state-based auth — in production use Context/Redux/AsyncStorage
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
          {!isAuthenticated ? (
            <Stack.Screen name="Auth">
              {(props) => <AuthStack {...props} onLogin={handleLogin} />}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Main">
              {(props) => <BottomTabNavigator {...props} onLogout={handleLogout} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
