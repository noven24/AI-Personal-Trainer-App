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

const ConfirmNewPasswordScreen = ({ navigation, route }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onLogin = route?.params?.onLogin;

  const handleConfirm = () => {
    // Navigate to Login or pass right through to app if desired
    // Here we'll usually go to Login so user can login with new pass
    navigation.navigate('Login', { onLogin });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AuthHeader navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Confirm New{'\n'}Password</Text>
          <Text style={styles.subtitle}>
            Please enter your new password. confirm it to enjoy much security.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Enter New Password</Text>
          
          <UnderlineInput
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            iconName="lock-closed-outline"
            secureTextEntry
            style={styles.inputMargin}
          />

          <UnderlineInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            iconName="lock-closed-outline"
            secureTextEntry
          />
        </View>

        <View style={styles.spacer} />

        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm} activeOpacity={0.85}>
          <Text style={styles.confirmBtnText}>Confirm Your Password</Text>
        </TouchableOpacity>
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
    paddingTop: 10,
    paddingBottom: 40,
  },
  textContainer: {
    marginBottom: 44,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
    lineHeight: 32,
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
    marginBottom: 16,
  },
  inputMargin: {
    marginBottom: 32,
  },
  spacer: {
    flex: 1,
  },
  confirmBtn: {
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
    marginBottom: 20,
  },
  confirmBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ConfirmNewPasswordScreen;
