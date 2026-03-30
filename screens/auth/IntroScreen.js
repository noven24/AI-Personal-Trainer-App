import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import GymCareLogo from '../../components/GymCareLogo';

const IntroScreen = ({ navigation, route }) => {
  const onLogin = route?.params?.onLogin;

  // Auto-navigate to Onboarding after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding', { onLogin });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <GymCareLogo size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IntroScreen;
