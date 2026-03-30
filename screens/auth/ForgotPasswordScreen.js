import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS } from '../../constants/colors';
import AuthHeader from '../../components/AuthHeader';
import UnderlineInput from '../../components/UnderlineInput';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    navigation.navigate('ConfirmationCode');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AuthHeader navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            To recover your password, you need to enter your registerd email address we will send the recovery code to your email
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Enter your email address</Text>
          <UnderlineInput
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            iconName="mail-outline"
            keyboardType="email-address"
          />
        </View>

        {/* Pushes the buttons to the bottom */}
        <View style={styles.spacer} />

        <TouchableOpacity style={styles.sendBtn} onPress={handleSendCode} activeOpacity={0.85}>
          <Text style={styles.sendBtnText}>Send Activation Code</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>New member? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 40,
  },
  textContainer: {
    marginBottom: 48,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    color: '#1A1A1A',
    lineHeight: 24,
  },
  formContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 10,
  },
  spacer: {
    flex: 1,
  },
  sendBtn: {
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
    marginBottom: 24,
  },
  sendBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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

export default ForgotPasswordScreen;
