import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../../constants/colors';
import AuthHeader from '../../components/AuthHeader';
import UnderlineInput from '../../components/UnderlineInput';

const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = route?.params?.onLogin;

  const handleLogin = () => {
    if (onLogin) onLogin();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AuthHeader navigation={navigation} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Welcome back</Text>
        </View>

        <View style={styles.formContainer}>
          <UnderlineInput
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            iconName="mail-outline"
            keyboardType="email-address"
            style={{ marginBottom: 24 }}
          />

          <UnderlineInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            iconName="lock-closed-outline"
            secureTextEntry
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} activeOpacity={0.85}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <View style={styles.orCircle}>
            <Text style={styles.orText}>or</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85}>
          <FontAwesome name="google" size={22} color="#DB4437" style={styles.socialIcon} />
          <Text style={styles.socialBtnText}>Login with Gmail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85}>
          <FontAwesome name="facebook" size={22} color="#1877F2" style={styles.socialIcon} />
          <Text style={styles.socialBtnText}>Login with Facebook</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>New member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp', { onLogin })}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    paddingHorizontal: 28,
    paddingTop: 10,
    paddingBottom: 40,
  },
  headerTextContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#A0A0A0',
  },
  formContainer: {
    marginBottom: 36,
  },
  forgotContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  forgotText: {
    color: '#2A4365', // Dark grayish blue
    fontSize: 14,
    fontWeight: '600',
  },
  loginBtn: {
    backgroundColor: COLORS.secondary, // Orange
    width: '100%',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: COLORS.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    marginBottom: 40,
  },
  loginBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    position: 'relative',
    height: 40, // space to contain the absolute circle perfectly
  },
  dividerLine: {
    position: 'absolute',
    left: 10,
    right: 10,
    height: 1.5,
    backgroundColor: '#000000',
  },
  orCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 18,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  socialIcon: {
    position: 'absolute',
    left: 24,
  },
  socialBtnText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  signupLink: {
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default LoginScreen;
