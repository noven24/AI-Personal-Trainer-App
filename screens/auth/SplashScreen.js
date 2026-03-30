import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/colors';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation, route }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const onLogin = route?.params?.onLogin;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 40,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <LinearGradient
      colors={[COLORS.primary, '#C0151A', '#8B0000']}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.logoContainer,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
        ]}
      >
        {/* Dumbbell Icon Mockup */}
        <View style={styles.iconRing}>
          <Text style={styles.iconText}>💪</Text>
        </View>
        <Text style={styles.logoText}>GymCare</Text>
        <Text style={styles.tagline}>STRENGTH | CARE | WELLNESS</Text>
      </Animated.View>

      <Animated.View style={[styles.bottomSection, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Onboarding', { onLogin })}
        >
          <Text style={styles.startText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login', { onLogin })}
        >
          <Text style={styles.loginLinkText}>Already have an account? <Text style={styles.loginLinkBold}>Sign In</Text></Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  iconRing: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
  },
  iconText: {
    fontSize: 48,
  },
  logoText: {
    fontSize: 42,
    fontWeight: '900',
    color: COLORS.white,
    letterSpacing: 2,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  tagline: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 3,
    marginTop: 10,
    fontWeight: '500',
  },
  bottomSection: {
    width: '100%',
    paddingHorizontal: 32,
    paddingBottom: 50,
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: COLORS.white,
    borderRadius: 25,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  startText: {
    color: COLORS.primary,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  loginLink: {
    marginTop: 20,
  },
  loginLinkText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
  },
  loginLinkBold: {
    color: COLORS.white,
    fontWeight: '700',
  },
});

export default SplashScreen;
