import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { COLORS } from '../../constants/colors';
import AuthHeader from '../../components/AuthHeader';

const ConfirmationCodeScreen = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    // Only accept numbers
    const numericText = text.replace(/[^0-9]/g, '');

    const newCode = [...code];
    newCode[index] = numericText;
    setCode(newCode);

    // Auto focus to next input if typing is successful
    if (numericText && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    // If user presses backspace on an empty field, focus the previous field
    if (nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
      inputRefs.current[index - 1].focus();
    }
  };

  const handleConfirm = () => {
    // Usually moves to "ConfirmNewPassword"
    navigation.navigate('ConfirmNewPassword');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <AuthHeader navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Confirmation code</Text>
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>
            Please enter verification code you've{'\n'}received{'\n'}
            <Text style={styles.emailText}>azi******@gmail.com</Text>
          </Text>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Enter verification code</Text>
          
          <View style={styles.otpContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.otpBox}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                selectionColor={COLORS.primary}
              />
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm} activeOpacity={0.85}>
          <Text style={styles.confirmBtnText}>Confirm</Text>
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
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
  },
  subtitleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  subtitleText: {
    fontSize: 15,
    color: '#1A1A1A',
    textAlign: 'center',
    lineHeight: 24,
  },
  emailText: {
    color: '#3B82F6', // A nice calm blue matching the image
  },
  inputSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E11E24', // Red border completely around the box
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
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
  },
  confirmBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ConfirmationCodeScreen;
